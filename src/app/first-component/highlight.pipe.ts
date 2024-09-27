import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {

  transform(originalText: any, textToFind: any): string {
    if ( !textToFind) { 
      return originalText; 
    } 
    const pattern = textToFind 
            .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&') 
            .split(' ') 
            .filter((t:any) => t.length > 0) 
            .join('|');
    
    const regex = new RegExp(pattern, 'gi'); 

    let result = textToFind 
            ? originalText.replace( 
                regex, 
                (match: any) => `<span class="highlighter">${match}</span>`
            ) 
            : originalText; 
 
    return result; 
    
  }

}
