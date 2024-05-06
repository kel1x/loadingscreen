local checkState = false

AddEventHandler("playerSpawned", function ()
    if not checkState then
        ShutdownLoadingScreen()
        ShutdownLoadingScreenNui()
        checkState = true
    end
end)