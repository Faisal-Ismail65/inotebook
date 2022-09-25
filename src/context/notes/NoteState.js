import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const state = {
        name : "faisal",
        class : "it"
    }
    return (
        <NoteContext.Provider value={state} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;