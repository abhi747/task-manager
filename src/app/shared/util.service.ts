import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root'
})
export class UtilService {

	allowedFileTypes = ['jpg', 'jpeg', 'png'];

	constructor(
		private _domSanitizer: DomSanitizer,
	) { }

	getStringFromArrayBuffer(arrayBuffer: (ArrayBuffer)): SafeUrl {
		const TYPED_ARRAY = new Uint8Array(arrayBuffer);
		const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
			return data + String.fromCharCode(byte);
		}, '');
		const base64String = btoa(STRING_CHAR);
		return `data:image/jpg;base64, ${base64String}`;
	}

	validateFileType(name: String): boolean {
		const extension = name.substring(name.lastIndexOf('.') + 1);
		return this.allowedFileTypes.some(fileType =>
			extension === fileType
		);
	}
}
