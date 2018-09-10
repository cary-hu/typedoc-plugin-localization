export class Constants {
    // JSON keys
    static readonly PARAMS = 'parameters';
    static readonly TAGS = 'tags';
    static readonly TAG_NAME = 'tagName';
    static readonly COMMENT = 'comment';
    static readonly TEXT = 'text';
    static readonly SHORT_TEXT = 'shortText';

    // Commands
    static readonly CONVERT_COMMAND = 'generate-json';
    static readonly RENDER_COMMAND = 'generate-from-json';
    static readonly SHORT_CONVERT_COMMAND = 'gen-json';
    static readonly SHORT_RENDER_COMMAND = 'gen-from-json';
    static readonly INCLUDE_TAGS_COMMAND = 'tags';
    static readonly INCLUDE_PARAMS_COMMAND = 'params';

    static readonly GLOBAL_FUNCS_FILE_NAME = 'globalFunctions';
}