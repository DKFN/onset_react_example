local testUi
AddEvent("OnPlayerSpawn", function()
    testUi = CreateWebUI(0.0, 0.0, 0.0, 0.0, 5, 60)
	LoadWebFile(testUi, "http://asset/onset-react-demo/react_ts_webpack/build/index.html")
	SetWebAlignment(testUi, 0.0, 0.0)
	SetWebAnchors(testUi, 0.0, 0.0, 1.0, 1.0)
    SetWebVisibility(testUi, WEB_VISIBLE)
    SetInputMode(INPUT_UI)    
    
    CreateTimer(function()
        ExecuteWebJS(testUi, "incrementCounter()")
    end, 1000)
end)
