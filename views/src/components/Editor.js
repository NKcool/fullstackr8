import React, { useState } from "react";
import { createReactEditorJS } from "react-editor-js";
import Header from "@editorjs/header";
import CodeTool from "@editorjs/code";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";
import Quote from "@editorjs/quote";
import Link from "@editorjs/link";

export const EDITOR_JS_TOOLS = {
    header: {
        header: {
            class: Header,
            inlineToolbar: ["link"],
            config: {
                placeholder: "Enter a header",
                levels: [1, 2, 3, 4, 5, 6],
                defaultLevel: 1,
            },
        },
        // list: {
        //     class: List,
        //     inlineToolbar: ["link", "bold"],
        //     config: {
        //         defaultStyle: "unordered",
        //     },
        // },
        //     embed: {
        //         class: Embed,
        //         inlineToolbar: false,
        //         config: {
        //             services: {
        //                 youtube: true,
        //             },
        //         },
        //     },
        //     code: CodeTool,
        //     image: {
        //         class: ImageTool,
        //         config: {
        //             endpoints: {
        //                 byFile: "http://localhost:3000/uploadFile",
        //                 byUrl: "http://localhost:3000/fetchUrl",
        //             },
        //             field: "blog",
        //             type: "image/*",
        //         },
        //     },
        //     quote: {
        //         class: Quote,
        //         inlineToolbar: true,
        //         config: {
        //             quotePlaceholder: "Enter a quote",
        //             captionPlaceholder: "Quote's author",
        //         },
        //     },
    },
};

const Editor = () => {
    const [editor, setEditor] = useState(null);
    const ReactEditorJS = createReactEditorJS();
    return (
        <ReactEditorJS
            holder="custom"
            value={editor}
            onChange={(e) => setEditor(e)}
            tools={EDITOR_JS_TOOLS}
        >
            <div id="custom"></div>
        </ReactEditorJS>
    );
};

export default Editor;
