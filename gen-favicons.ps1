Add-Type -AssemblyName System.Drawing

$src = "public\logo branca.png"
$img = [System.Drawing.Image]::FromFile((Resolve-Path $src))

$sizes = @(
  "favicon-16.png|16|16",
  "favicon-32.png|32|32",
  "favicon-48.png|48|48",
  "favicon-96.png|96|96",
  "apple-touch-icon.png|180|180",
  "icon-192.png|192|192",
  "icon-512.png|512|512",
  "logonova.png|512|512"
)

foreach ($entry in $sizes) {
  $parts = $entry -split '\|'
  $name = $parts[0]
  $w = [int]$parts[1]
  $h = [int]$parts[2]

  $bmp = New-Object System.Drawing.Bitmap($w, $h)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.DrawImage($img, 0, 0, $w, $h)
  $outPath = "public\" + $name
  $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
  Write-Host ("Gerado: " + $outPath + " (" + $w + "x" + $h + ")")
}

$img.Dispose()
Write-Host "Todos os favicons gerados com sucesso!"
