import React, { useState } from 'react';

// Recursive function to update the folder structure
const updateFolderStructure = (data, path, newItem) => {
    if (path.length === 0) {
        if (data.isFolder) {
            return {
                ...data,
                items: [...(data.items || []), newItem],
            };
        }
        return data;
    }

    const [currentFolder, ...restPath] = path;
    return {
        ...data,
        items: data.items.map((item) =>
            item.name === currentFolder
                ? updateFolderStructure(item, restPath, newItem)
                : item
        ),
    };
};

const Folders = ({ data, path = [], setData }) => {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isAddingFolder, setIsAddingFolder] = useState(false);

    const handleAddItem = () => {
        if (inputValue.trim()) {
            const newItem = {
                name: inputValue.trim(),
                isFolder: isAddingFolder,
                items: isAddingFolder ? [] : undefined,
            };
            const updatedData = updateFolderStructure(data, path, newItem);
            setData(updatedData);
            setInputValue('');
            setShowInput(false);
        }
    };

    return (
        <div>
            <span onClick={() => setExpand(!expand)} style={{ cursor: 'pointer' }}>
                {data.isFolder ? (expand ? '📂' : '📁') : '📄'} {data.name}
                {data.isFolder && (
                    <>
                        <button 
                            onClick={() => {
                                setShowInput(true);
                                setIsAddingFolder(true);
                            }} 
                            style={{ marginLeft: '1rem' }}
                        >
                            Folder +
                        </button>
                        <button 
                            onClick={() => {
                                setShowInput(true);
                                setIsAddingFolder(false);
                            }} 
                            style={{ marginLeft: '1rem' }}
                        >
                            Files +
                        </button>
                    </>
                )}
            </span>
            {showInput && (
                <div style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={isAddingFolder ? 'Enter folder name' : 'Enter file name'}
                    />
                    <button onClick={handleAddItem} style={{ marginLeft: '0.5rem' }}>
                        Add
                    </button>
                    <button 
                        onClick={() => {
                            setShowInput(false);
                            setInputValue('');
                        }} 
                        style={{ marginLeft: '0.5rem' }}
                    >
                        Cancel
                    </button>
                </div>
            )}
            {data.isFolder && expand && (
                <div style={{ paddingLeft: '2rem' }}>
                    {data.items?.map((item, index) => (
                        <Folders 
                            key={index} 
                            data={item} 
                            path={[...path, data.name]} 
                            setData={setData} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Folders;
