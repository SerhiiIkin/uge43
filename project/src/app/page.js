"use client"
import { Template } from "@/components/Template";
import { Provider } from "react-redux";
import store from "./lib/store";
import { Counter } from "./lib/features/counter/Counter";

export default function Home() {
    const data = { name: "Serhii", id: 1 };
    const data2 = { name: "Gabriel", id: 2 };
    const dataArray = [data, data2];
    const title = "react"

    return (
        <Provider store={store}>
            <main>
                <Template data={dataArray} title={title} />
                <Counter/>
            </main>
        </Provider>
    );
}
