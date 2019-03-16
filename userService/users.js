const users = ()=>{
    const usersMap = {
        '1': 'Giovanni',
        '2': 'Sarah'
    };
    return id => usersMap[id]
}


module.exports = users();

