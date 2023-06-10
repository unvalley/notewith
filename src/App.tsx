import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { EpheEditor } from "./EpheEditor";

function App() {
	const [greetMsg, setGreetMsg] = useState("");
	const [name, setName] = useState("");

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
		setGreetMsg(await invoke("greet", { name }));
	}

	return (
		<div className="bg-neutral-50 flex flex-col justify-center items-center">
			<EpheEditor />
		</div>
	);
}

export default App;
