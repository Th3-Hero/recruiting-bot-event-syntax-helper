/**
 * A simple grammar allowing users to provide conditions for EventBindings via Discord.
 */
grammar EventCondition;

// Productions
condition
    : CLANS MATCHES clanCondition EOF
    | VOTES MATCHES voteCondition EOF;

clanCondition
    : LPAREN clanCondition AND clanCondition RPAREN
    | LPAREN clanCondition OR clanCondition RPAREN
    | TEXT;

voteCondition
    : LPAREN voteCondition OR voteCondition RPAREN
    | TEXT gameServer;

gameServer
    : NA
    | EU
    | ASIA;

// Lexer

// Keywords
AND options { caseInsensitive=true; }: 'and';
OR options { caseInsensitive=true; }: 'or';

MATCHES options { caseInsensitive=true; }: 'matches';
CLANS options { caseInsensitive=true; }: 'clans';
VOTES options { caseInsensitive=true; }: 'vote';

NA options { caseInsensitive=true; }: 'na';
EU options { caseInsensitive=true; }: 'eu';
ASIA options { caseInsensitive=true; }: 'asia';

LPAREN: '(';
RPAREN: ')';

// Symbols
// Encompasses all characters that are legal in a Wargaming Clan tag and Player name
// Not all characters may be legal for a given case (player name is a subset, for example)
TEXT: [a-zA-Z-_0-9]+;

WS: [ \t\r\n\u000C]+ -> skip;
