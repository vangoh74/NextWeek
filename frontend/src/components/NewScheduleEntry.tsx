import {ScheduleEntry} from "../model/ScheduleEntry";
import {FormEvent, useState} from "react";


type NewScheduleEntryProps = {
    addScheduleEntry: (newEntry: Omit<ScheduleEntry, "id">) => void;
}


export default function NewScheduleEntry({addScheduleEntry}: NewScheduleEntryProps) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dummyDate, setDummyDate] = useState('');

    const onAdd = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!title){
            alert(`Please enter a title!`);
            return;
        } else if (!description){
            alert(`Please enter a description!`);
            return;
        } else if (!dummyDate) {
            alert(`Please enter a Date!`);
            return;
        }

        const newScheduleEntry : Omit <ScheduleEntry, "id"> = {
            title : title,
            description : description,
            entryDummyDate: dummyDate
        }

        addScheduleEntry(newScheduleEntry);
        setTitle('');
        setDescription('');
        setDummyDate('');

    }


    return (
        <div>
            <form onSubmit={onAdd}>
                <input type={"text"}
                       placeholder={"Title"}
                       value={title}
                       onChange={event => setTitle(event.target.value)}/>
                <input type={"text"}
                       placeholder={"Description"}
                       value={description}
                       onChange={event => setDescription(event.target.value)}/>
                <input type={"text"}
                           placeholder={"DummyDate"}
                           value={dummyDate}
                           onChange={event => setDummyDate(event.target.value)}/>
                <input type={"submit"} value={"Add new entry"} />
            </form>
        </div>
    )


}