fx_version 'adamant'
game 'gta5'

description 'NoPixel 4.0 Insipired Loading Screen'
author 'kel1x'
version '1.0.0'

files {
    "ui/**/*",
    'ui/**/*.*',
    'ui/**/**/*.*'
}

client_scripts {
    'client/main.lua',
}

loadscreen 'ui/index.html'
loadscreen_manual_shutdown "yes"
loadscreen_cursor 'yes'

escrow_ignore {
    'client/main.lua',
    'ui/**/**/*.*'
}

lua54 'yes'