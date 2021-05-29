import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === "" || arg.length < 3) return value;
    const resultPost = [];
    for(const post of value){
      if(post.name.toLoweCase().indexOf(arg.toLoweCase()) > -1){
        console.log('buscado')
        resultPost.push(post);
      };
    };
    return resultPost;
  }  
}  