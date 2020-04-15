const addItem = item =>{
  console.log("Running Actions addItem", item)
  return {type: "ADD_FEATURE", payload:item}
}

export const removeItem = item => {
  // dipsatch an action here to add an item
  return {type: "REMOVE_FEATURE", payload:item}
};

export default addItem

