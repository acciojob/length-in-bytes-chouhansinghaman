const byteSize = (str) => {
  let size = new Blob([str]).size

	return size
};

// // Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
