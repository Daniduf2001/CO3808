import React, {useState} from 'react';
import './module.css';

function Module(props) {

    const [dragCount, setDragCount] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    function onDragEnter(e) {
        e.preventDefault();
        setDragCount(dragCount + 1);
        setIsDragging(true);
    }

    function onDragLeave(e) {
        e.preventDefault();
        setDragCount(dragCount - 1);
        if (dragCount < 0) {
            setIsDragging(false);
        }
        setIsDragging(false);
    }

    const onDragOver = (e) => {
        let event = Event;
        event.stopPropagation();
        event.preventDefault();

        alert("dragged")
    }
    const onDrop = (e) => {
        alert("dropped");
        e.stopPropagation();
        e.preventDefault();
        setIsDragging(false);
        alert("dropped")
        const files = e.dataTransfer.files;
        Array.from(files).forEach((file) => {
            addImage(file);
        });
    }

    function addImage(file) {
        if (!file.type.match(/image.*/)) {
            console.log(`${file.name} is not an image`);
            return;
        }
        this.files.push(file);
        const img = new Image(), reader = new FileReader();
        reader.onload = (e) => {
            this.images.push(e.target.result);
        };
        reader.readAsDataURL(file);
    }

    return (<div className="main_container">
        <div className="item">
            <div className="col-lg-12">
                <div className="row d-flex justify-content-center align-item-center">
                    <form id="labForm">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <label htmlFor="moduleName fw-bold">Module Name</label>
                                <input type="text" name="moduleName" id="moduleName"
                                       className="form-control" aria-label="role"/>
                                <small
                                    htmlFor="moduleName"
                                    className="d-block text-danger form-text invalid-feedback"
                                ></small>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <label htmlFor="moduleContent fw-bold">drag and drop module content</label>
                                <div
                                    onDragEnter={onDragEnter}
                                    onDragLeave={onDragLeave}
                                    onDrop={onDragOver}
                                    id="moduleContent" className={isDragging ? 'card cardDiv dragging' : 'card cardDiv'}
                                    title="drag and drop module content"/>
                                <small
                                    htmlFor="moduleContent"
                                    className="d-block text-danger form-text invalid-feedback"
                                ></small>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <button className="btn btn-primary col-12" type="reset">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>);
}

export default Module;