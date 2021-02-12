let pattern = (length) => {
for (let i = 1; i <= length; i++) {
    console.log('h'.repeat(i).padStart(length));
}
}
pattern(6);