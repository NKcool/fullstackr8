import { createReactEditorJS } from "react-editor-js";

import { useRef, useCallback } from "react";
import { EDITOR_JS_TOOLS } from "./constants";

const ReactEditorJS = createReactEditorJS();

function App() {
    const editorJS = useRef(null);
    const handleInitialize = useCallback((instance) => {
        editorJS.current = instance;
    }, []);

    const handleSave = useCallback(async () => {
        const savedData = await editorJS.current.save();
        console.log(savedData);
    }, []);

    const handleClear = useCallback(async () => {
        await editorJS.current.clear();
    }, []);
    return (
        <div>
            <ReactEditorJS
                tools={EDITOR_JS_TOOLS}
                onInitialize={handleInitialize}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    );
}

export default App;
