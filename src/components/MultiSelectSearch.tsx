import React, { useState } from 'react';

const MultiSelectSearch = () => {
    const [input, setinput] = useState('');
    const [selectedItems, setselectedItems] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    const allItems = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setinput(value);
    
        if (value) {
          const filteredSuggestions = allItems.filter(
            item => item.toLowerCase().includes(value.toLowerCase()) && !selectedItems.includes(item)
          );
          setSuggestions(filteredSuggestions);
        } else {
          setSuggestions([]);
        }
      };
    const handleKeyDown=(e)=>{
        if(e.key==='Enter' &&  input){
            const matchingItem = suggestions.find(
                suggestion => suggestion.toLowerCase() === input.toLowerCase()
              );
              handleAddItem(matchingItem || input);
        }
       if(e.key==='Backspace' && !input && selectedItems.length>0){
            const newItem=[...selectedItems];
            newItem.pop();
            setselectedItems(newItem);
       }
    }
    const handleAddItem=(item)=>{
    setselectedItems([...selectedItems,item]);
        setinput('');
        setSuggestions([]);
    }
  return (
    <div style={{ width: 'auto', border: '1px solid #ccc', padding: '10px' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
      {selectedItems.map((item, index) => (
        <div
          key={index}
          style={{
            background: '#007bff',
            color: '#fff',
            padding: '5px 10px',
            borderRadius: '15px',
          }}
        >
          {item}
        </div>
      ))}
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={{ border: 'none', outline: 'none', flex: 1 }}
      />
    </div>
    {suggestions.length > 0 && (
      <div style={{ border: '1px solid #ccc', marginTop: '5px' }}>
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            style={{ padding: '5px', cursor: 'pointer' }}
            onClick={(e)=>handleAddItem(suggestion)}
          >
            {suggestion}
          </div>
        ))}
      </div>
    )}
  </div>
);

}

export default MultiSelectSearch