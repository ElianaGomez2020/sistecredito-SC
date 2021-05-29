import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const post of value){
      if(post.title.toLoweCase().indexOf(arg.toLoweCase()) > -1){
        console.log('buscado')
        resultPost.push(post);
      };
    };
    return resultPost;
  }  
}  
  


