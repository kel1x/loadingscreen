fx_version 'adamant'
game 'gta5'

description 'NoPixel 4.0 Insipired Loading Screen'
author 'kel1x'
version '1.0.0'

files {
    "uipage/**/*",
    'uipage/**/*.*',
    'uipage/**/**/*.*'
}

client_scripts {
    'client/main.lua',
}

loadscreen 'uipage/index.html'
loadscreen_manual_shutdown "yes"
loadscreen_cursor 'yes'

escrow_ignore {
    'client/main.lua',
    'uipage/**/**/*.*'
}

lua54 'yes'
