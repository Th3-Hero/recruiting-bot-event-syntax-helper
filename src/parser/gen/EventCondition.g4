/**
 * A simple grammar allowing users to provide conditions for EventBindings via Discord.
 */
grammar EventCondition;

// Productions
eventCondition
    : CLANS MATCHES condition EOF
    | VOTES MATCHES voteCondition EOF;

voteCondition
    : voteOrCondition
    | playerInfo;
voteOrCondition
    : LPAREN voteCondition OR voteCondition RPAREN;
playerInfo
    : basicCondition gameServer;

condition
    : basicCondition
    | compositeCondition;
basicCondition
    : TEXT;
compositeCondition
    : andCondition
    | orCondition
    | anyCondition
    | allCondition;

andCondition
    : LPAREN condition AND condition RPAREN;
orCondition
    : LPAREN condition OR condition RPAREN;
anyCondition
    : ANY LPAREN basicConditionList RPAREN;
allCondition
    : ALL LPAREN basicConditionList RPAREN;

basicConditionList
    : basicConditionList COMMA basicCondition
    | basicCondition;

gameServer
    : NA
    | EU
    | ASIA;

// Lexer

// Keywords
AND options { caseInsensitive=true; }: 'and';
OR options { caseInsensitive=true; }: 'or';
ANY options { caseInsensitive=true; }: 'any';
ALL options { caseInsensitive=true; }: 'all';

MATCHES options { caseInsensitive=true; }: 'matches';
CLANS options { caseInsensitive=true; }: 'clans';
VOTES options { caseInsensitive=true; }: 'vote';

NA options { caseInsensitive=true; }: 'na';
EU options { caseInsensitive=true; }: 'eu';
ASIA options { caseInsensitive=true; }: 'asia';

LPAREN: '(';
RPAREN: ')';
COMMA: ',';

// Symbols
// Encompasses all characters that are legal in a Wargaming Clan tag and Player name
// Not all characters may be legal for a given case (player name is a subset, for example)
TEXT: [a-zA-Z-_0-9]+;

WS: [ \t\r\n\u000C]+ -> skip;
