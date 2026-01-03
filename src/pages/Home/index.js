import { Navbar } from "../../components/Navbar"
import { Fragment } from "react/jsx-runtime"
import { SideBar } from "../../components/Sidebar"
import { useReducer, useState } from "react"
import { notesReducer } from "../../reducers/notesReducer"

export const Home = () => {

    const initialState = {
        title: '',
        text: '',
        notes: []
    }

    const [{title, text, notes}, notesDispatch] = useReducer(notesReducer, initialState);

    const onTitleChange = (e) => {
        notesDispatch({
            type: 'TITLE',
            payload: e.target.value
        })
    }

    const onTextChange = (e) => {
        notesDispatch({
            type: 'TEXT',
            payload: e.target.value
        })
    }

    const onAddClick = () => {
        notesDispatch({
            type: 'ADD_NOTE'
        })
        notesDispatch({
            type: 'CLEAR_INPUT'
        })
    }

    console.log(notes);

    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-3">
                <SideBar />
                <div>
                    <div className="flex flex-col w-[300px] border border-red-400 relative">
                        <input value={title} onChange={onTitleChange} className="border" placeholder="Enter Title" />
                        <textarea value={text} onChange={onTextChange} className="border" placeholder="Enter Text" />
                        <button disabled={title.length === 0} className="absolute bottom-0 right-0" onClick={onAddClick}>
                            <span class="material-symbols-outlined">add</span>
                        </button>
                    </div>
                    <div className="mt-14 flex flex-wrap gap-4">
                        {
                            notes && notes.length > 0 && notes.map(({id, title, text}) => (
                                <div key={id} className="w-56 border border-neutral-800 p-2 rounded-md">
                                    <div className="flex justify-between">
                                        <p>{title}</p>
                                        <button><span class="material-symbols-outlined">keep</span></button>
                                    </div>
                                    <div className="flex flex-col">
                                        <p>{text}</p>
                                        <div className="ml-auto">
                                            <button><span class="material-symbols-outlined">archive</span></button>
                                            <button><span class="material-symbols-outlined">delete</span></button>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </main>
        </Fragment>
    )
}