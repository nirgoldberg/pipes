import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
	name:	'rtrim'
})

export class RtrimPipe implements PipeTransform {
	transform(value:string, args:string[]):string {
		var trim = args[0] || '\\s';

		return typeof(value) == 'string'
			? value.replace(new RegExp(trim + '+$'), '')
			: value;
	}
}