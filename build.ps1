# Create build directory if it doesn't exist
if (-not (Test-Path -Path "dist")) {
    New-Item -ItemType Directory -Path "dist"
}

# Copy all files to build directory
Copy-Item -Path "*" -Destination "dist" -Recurse -Force

Write-Host "Build completed! Files are ready for deployment."
