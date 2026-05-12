grammar Calculator;

// ====== REGLAS SINTÁCTICAS (parser) ======

programa: instruccion+ EOF ;

instruccion: variar
           | asignacion
           | salida
           ;

variar: 'variar' variable 'desde' expresion 'hasta' expresion
        ('con' 'paso' expresion)?
        'hacer' bloque 'fin_variar' ;

variable: ID ;

expresion: termino (op=('+'|'-'|'*'|'/') termino)* ;

termino: numero                  # terminoNum
       | variable                # terminoVar
       | '(' expresion ')'       # terminoParens
       ;

bloque: instruccion* ;

asignacion: variable ASIGNAR expresion ;

salida: 'escribir' expresion ;

numero: INT ;

// ====== TOKENS (lexer) ======

ASIGNAR : '<-' ;
ID      : [a-zA-Z] [a-zA-Z0-9_]* ;
INT     : [0-9]+ ;
WS      : [ \t\r\n]+ -> skip ;