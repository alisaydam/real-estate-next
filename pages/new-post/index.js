import { useRef, useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App() {
  const editorRef = useRef(null);
  const [theme, setTheme] = useState("");

  const log = () => {
    if (editorRef.current) {
      const data = editorRef.current.getContent();
      // console.log(editorRef.current);
    }
  };
  useEffect(() => {
    const item = localStorage.getItem("theme");
    setTheme(item === "dark" ? true : false);
  }, []);

  return (
    <>
      <div style={{ width: "500px", margin: "auto" }}>
        {theme === true || theme === false ? (
          <Editor
            apiKey="c88s6lwj6avg8scallqoosk6kvfygsjzap76yf25scpc8k3m"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              skin: theme ? "oxide-dark" : "oxide",
              content_css: theme ? "dark" : "default",
              contextmenu: "link image table",
              height: 500,
              menubar: false,
              menubar: [],
              plugins: [
                "preview",
                "importcss",
                "searchreplace",
                "autolink",
                "autosave",
                "save",
                "directionality",
                "code",
                "visualblocks",
                "visualchars",
                "fullscreen",
                // "image",
                "link",
                // "media",
                "template",
                "codesample",
                "table",
                "charmap",
                "pagebreak",
                "nonbreaking",
                "anchor",
                "insertdatetime",
                "advlist",
                "lists",
                "wordcount",
                "help",
                "charmap",
                "quickbars",
                "emoticons",
              ],
              toolbar:
                "undo redo | blocks |  bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent hr | removeformat | help preview",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        ) : (
          ""
        )}

        <button onClick={log}>Log editor content</button>
      </div>
    </>
  );
}
