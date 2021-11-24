function superbowlWin(obj) {
        let objElement = obj.find(element => element.result === "W") //this will return element
        if (objElement === undefined) {
            return objElement
        } 
        return objElement.year
}


