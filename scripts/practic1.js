let arrBtn = ['Главное', 'Контакты', 'Категории', 'Личный кабинет'];
generateHeader ('Site name', 6, 'DarkCyan', 'white');
generateHeader ('Site name', arrBtn, 'DarkOliveGreen', 'white');

function generateHeader(title, navItems, bgcolor, fontcolor) {
    let btnStr = '';
    if (Array.isArray(navItems)) {
        for (let el of navItems) {           
            btnStr +=
            `<a href="#" style = "` +
                `margin-left: 10px;` +
                `padding: 4px 8px;` +
                `border: 3px solid ${fontcolor};` +           
                `font-size: 16px;` +
                `color:${fontcolor};` +
                `text-decoration: none` +                
            `">` +
                `${el}` + 
            `</a>`  
        }        
    }
    else 
    if (typeof navItems === 'number') {
        for (let i = 0; i < navItems; ++i) {            
            btnStr +=
            `<a href="#" style = "` +
                `margin-left: 10px;` +
                `padding: 4px 8px;` +
                `border: 3px solid ${fontcolor};` +           
                `font-size: 16px;` +
                `color:${fontcolor};` +
                `text-decoration: none` +                
            `">` +
                `empty` + 
            `</a>`  
        }
    }
    document.write (        
        `<header style = "` +        
            `padding: 0 6px;` +
            `height: 60px;` +
            `box-shadow: 0 5px 10px #00000060;` +
            `display: flex;` +
            `justify-content: space-between;` +    
            `background-color: ${bgcolor}` +
        `">` +
            `<div style = "` +
                `display: flex` +            
            `">`+
                `<a href="#" style = "` +
                `text-decoration: none;` +
                `display: flex;` +
                `align-items: center`+
                `">`+
                    `<h1 style = "` +
                        `margin-left: 8px;` +
                        `font-size: 36px;` +
                        `letter-spacing: 1px;` +
                        `color: ${fontcolor}` +
                        `">${title}`+
                    `</h1>` +
                `</a>`+
            `</div>`+
            `<div style = "` +
                `display: flex;` +
            `">` +
                `<nav style = "` +
                    `display: flex;` +
                    `align-items: center;` +
                `">`+
                    `${btnStr}` +                 
                `</nav>` +
            `</div>`+
        `</header>`
    );
}