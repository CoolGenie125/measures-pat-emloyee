import { EditorState } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface ActionQuillProps {
  action: (e: any) => void;
}

export default function ActionQuill({ action }: ActionQuillProps) {
  const [editor, setEditor] = useState<any>();

  const handleEditor = (e: EditorState) => {
    setEditor(e);
    action(e);
  };
  return (
    <Editor editorState={editor} onEditorStateChange={(e) => handleEditor(e)} />
  );
}
