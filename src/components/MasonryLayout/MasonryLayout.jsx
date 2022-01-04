import React, {useState, useEffect} from "react";
import "./MasonryLayout.css";

//put image in the smallest/shortest column
//check measure

function getMinColumn(col1, col2, col3){
    if(col1<=col2 && col1<=col3){
        return 1;
    }
    else if(col2<col1 && col2<=col3){
        return 2;
    }
    else{
        return 3;
    }
}

function configureLayout(links, imgSize1 , imgSize2){
    let short = true;
    let col1 = 0; let col2 = 0; let col3 = 0;
    const columns = {
        one: [],
        two: [],
        three: []
    }
    for(let i=0; i<links.length; i++){
        let link = links[i];
        let shortestCol = getMinColumn(col1, col2, col3);
        console.log(shortestCol)
        if(shortestCol===1){
            columns.one.push(link);
            col1+=imgSize1.height;
        }
        else if(shortestCol===2){
            columns.two.push(link);
            col2+=imgSize2.height;
        }
        else{
            columns.three.push(link);
            col3+= (short) ? imgSize1.height : imgSize2.height;
            short = !short;
        }

    }
    return columns;
}

export default function MasonryLayout(){
    let links = [
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    ];

    const initialState = {
        imgs: [],
        colLength: 0
    };
    const colOneImgSize = {
        width: 385,
        height: 307
    };
    const colTwoImgSize = {
        width: 383,
        height: 583
    };
    const {one, two, three} = configureLayout(links, colOneImgSize, colTwoImgSize)
    // const [colOne, setColOne] = useState(initialState);
    // const [colTwo, setColTwo] = useState(initialState);
    // const [colThree, setColThree] = useState(initialState);

   
           


    return(
        <div className="container">
            <div className="col">
                {one.map((link,i)=><img src={link} key={i+1} alt={i} height={colOneImgSize.height} width={colOneImgSize.width}/>)}
            </div>
            <div className="col">
                {two.map((link,i)=><img src={link} key={i+2} alt={i} height={colTwoImgSize.height} width={colTwoImgSize.width}/>)}
            </div>
            <div className="col">
                {three.map((link,i)=><img src={link} key={i+3} alt={i} height={((i)%2===0) ? colOneImgSize.height : colTwoImgSize.height} width={((i)%2===0) ? colOneImgSize.width : colTwoImgSize.width}/>)}
            </div>
        </div>
    );
}