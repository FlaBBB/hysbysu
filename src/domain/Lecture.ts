import { ValidationError } from "./errors/ValidationError";

type LectureOptions = {
	name: string;
	url: string;
	type: "material" | "assignment" | "unknown";
};

export class Lecture {
	public readonly name: LectureOptions["name"];
	public readonly url: LectureOptions["url"];
	public readonly type: LectureOptions["type"];

	constructor(opts: LectureOptions) {
		if (opts.name.length < 1) throw new ValidationError("name");
		if (opts.url.length < 1) throw new ValidationError("url");
		if (opts.type.length < 1) throw new ValidationError("type");

		this.name = opts.name;
		this.url = opts.url;
		this.type = opts.type;
	}
}
