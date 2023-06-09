import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const MyEditor: React.FC = () => {
	const editor = useEditor({
		extensions: [StarterKit, Highlight, Typography],
		editable: true,
		autofocus: true,
		editorProps: {
			attributes: {
				class:
					"prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none p-4 w-screen h-screen",
			},
		},
		content: `<h2>Hi there! 👋</h2>
    <p>This is default contents.</p>
    `,
	});

	return <EditorContent editor={editor} />;
};
