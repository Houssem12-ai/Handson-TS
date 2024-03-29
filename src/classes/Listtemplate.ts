import  { Formatter } from '../intefaces/hasFormatter.js'

export class ListTemplate{
    constructor(private container: HTMLUListElement) { }
    
    render(item: Formatter, heading: string, pos: 'start' | 'end') {

        const li = document.createElement('li')
        const h4 = document.createElement('h4')
        h4.innerText = heading;
        li.append(h4)

        const p = document.createElement('p')
        p.innerText = item.format();

        li.append(p);
        if (pos == 'start') {
            this.container.prepend(li)
        } else if (pos === 'end') {
            this.container.append(li);
        }

    }
   
} 