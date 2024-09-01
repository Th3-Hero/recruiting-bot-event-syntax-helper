import { CharStreams, CommonTokenStream, type RecognitionException } from 'antlr4';
import EventConditionParser from '../parser/EventConditionParser';
import EventConditionLexer from '../parser/EventConditionLexer';
import { ParsingError } from './ParsingError';

/**
 * @throws {ParsingError} Throws an error if failed to parse the input.
 */
export const parse = (input: string): boolean => {
    const inputStream = CharStreams.fromString(input);
    const lexer = new EventConditionLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new EventConditionParser(tokenStream);

    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError: (recognizer: any, offendingSymbol: any, line: number, column: number, msg: string, e: RecognitionException) => {
            throw new ParsingError(msg);
        }
    });
    parser.eventCondition();
    return true;
};