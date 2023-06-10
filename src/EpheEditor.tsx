import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const EpheEditor: React.FC = () => {
	const editor = useEditor({
		extensions: [StarterKit, Highlight, Typography],
		editable: true,
		autofocus: true,
		editorProps: {
			attributes: {
				class:
					"prose lg:prose-lg xl:prose-3xl p-8 focus:outline-none w-screen h-screen",
			},
		},
		content: `<h2>Hi there! 👋</h2>
    <p>This is default contents.</p>
    `,
	});

	return <EditorContent editor={editor} />;
};
