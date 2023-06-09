import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const MyEditor: React.FC = () => {
	const editor = useEditor({
		extensions: [StarterKit, Highlight, Typography],
		editable: true,
		content: "<p>Hello World! 🌎</p>",
	});

	return <EditorContent editor={editor} />;
};
