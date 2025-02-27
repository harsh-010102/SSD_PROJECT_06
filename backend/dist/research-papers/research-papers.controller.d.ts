/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ResearchPapersService } from './research-papers.service';
import { CreateResearchPaperDto } from './dto/create-research-paper.dto';
import { UserDto } from 'src/users/dtos';
export declare class ResearchPapersController {
    private readonly researchPapersService;
    constructor(researchPapersService: ResearchPapersService);
    create(user: UserDto, createResearchPaperDto: CreateResearchPaperDto): Promise<{
        statusCode: number;
        data: import("mongoose").Document<unknown, {}, import("./schemas").ResearchPaperDocument> & import("./schemas").ResearchPaper & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    findAll(user: UserDto): Promise<{
        statusCode: number;
        data: string;
    } | {
        statusCode: number;
        data: Omit<import("mongoose").Document<unknown, {}, import("./schemas").ResearchPaperDocument> & import("./schemas").ResearchPaper & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
    }>;
    findOne(id: string, user: UserDto): Promise<{
        statusCode: number;
        data: import("mongoose").Document<unknown, {}, import("./schemas").ResearchPaperDocument> & import("./schemas").ResearchPaper & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    remove(id: string): Promise<{
        statusCode: number;
        message: string;
    }>;
    addCommentToResearchPaper(researchPaperId: string, comment: string, user: UserDto): Promise<{
        statusCode: number;
        data: import("mongoose").Document<unknown, {}, import("./schemas").ResearchPaperDocument> & import("./schemas").ResearchPaper & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
}
