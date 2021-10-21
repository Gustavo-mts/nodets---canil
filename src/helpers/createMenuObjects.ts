type MenuOptions = ''|'all'|'dogs'|'cats'|'fishes';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObjects = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    };

    if(activeMenu!=='') {
        returnObjects[activeMenu] = true;
    }

    return returnObjects;
}