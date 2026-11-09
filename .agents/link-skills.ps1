# Expone las skills reales de <repo>\.agents\skills a los harnesses que NO
# escanean esa carpeta. Crea junctions NTFS (no copia): una sola copia fisica.
#
#   DSH        -> lee <repo>\.agents\skills de forma nativa (no necesita junction).
#   Claude Code / opencode / Copilot -> leen <repo>\.claude\skills (proyecto) y
#                                        ~\.claude\skills (global).
#
# Uso:
#   powershell -ExecutionPolicy Bypass -File .agents\link-skills.ps1
#   powershell -ExecutionPolicy Bypass -File .agents\link-skills.ps1 -Global
#
# Por defecto enlaza a <repo>\.claude\skills (repo-scoped). Con -Global tambien
# mantiene ~\.claude\skills (visible desde cualquier carpeta).

param(
    [switch]$Global
)

$ErrorActionPreference = 'Stop'

$store    = Join-Path $PSScriptRoot 'skills'               # <repo>\.agents\skills
$repoRoot = Split-Path $PSScriptRoot -Parent               # <repo>
$claudeRepo = Join-Path $repoRoot '.claude\skills'         # skills de proyecto

if (!(Test-Path $store)) { throw "No skills store: $store" }

function Publish-Junction {
    param([string]$Source, [string]$Dest)
    if (Test-Path $Dest) {
        $item = Get-Item $Dest -Force
        if ($item.LinkType -eq 'Junction') {
            Write-Output "OK        $($item.FullName)"
        } else {
            Write-Warning "REAL COPY blocks the link, left untouched: $($item.FullName)"
        }
    } else {
        New-Item -ItemType Junction -Path $Dest -Value $Source | Out-Null
        Write-Output "Linked -> $Dest"
    }
}

$targets = @($claudeRepo)
if ($Global) { $targets += (Join-Path $HOME '.claude\skills') }

foreach ($target in $targets) {
    if (!(Test-Path $target)) {
        New-Item -ItemType Directory -Force -Path $target | Out-Null
        Write-Warning "Created skills dir: $target"
    }
    Get-ChildItem $store -Directory | ForEach-Object {
        Publish-Junction -Source $_.FullName -Dest (Join-Path $target $_.Name)
    }
}

Write-Output "`nDSH ya lee <repo>\.agents\skills nativamente (no necesita junction)."
Write-Output "Done. Skills expuestas por junction desde '$store'."
