// Generated from Calculator.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4, { PredictionContextCache } from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
import CalculatorVisitor from './CalculatorVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0014S\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0006\u0002\u0018\n\u0002\r\u0002\u000e\u0002\u0019\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003!\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004,\n\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0007\u00067\n\u0006\f\u0006\u000e\u0006:\u000b\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007B\n\u0007\u0003\b\u0007\bE\n\b\f\b\u000e\bH\u000b\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0002\u0002\f\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0002\u0003\u0003\u0002\n\r\u0002P\u0002\u0017\u0003\u0002",
    "\u0002\u0002\u0004 \u0003\u0002\u0002\u0002\u0006\"\u0003\u0002\u0002",
    "\u0002\b1\u0003\u0002\u0002\u0002\n3\u0003\u0002\u0002\u0002\fA\u0003",
    "\u0002\u0002\u0002\u000eF\u0003\u0002\u0002\u0002\u0010I\u0003\u0002",
    "\u0002\u0002\u0012M\u0003\u0002\u0002\u0002\u0014P\u0003\u0002\u0002",
    "\u0002\u0016\u0018\u0005\u0004\u0003\u0002\u0017\u0016\u0003\u0002\u0002",
    "\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002",
    "\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u001b\u0003\u0002\u0002",
    "\u0002\u001b\u001c\u0007\u0002\u0002\u0003\u001c\u0003\u0003\u0002\u0002",
    "\u0002\u001d!\u0005\u0006\u0004\u0002\u001e!\u0005\u0010\t\u0002\u001f",
    "!\u0005\u0012\n\u0002 \u001d\u0003\u0002\u0002\u0002 \u001e\u0003\u0002",
    "\u0002\u0002 \u001f\u0003\u0002\u0002\u0002!\u0005\u0003\u0002\u0002",
    "\u0002\"#\u0007\u0003\u0002\u0002#$\u0005\b\u0005\u0002$%\u0007\u0004",
    "\u0002\u0002%&\u0005\n\u0006\u0002&\'\u0007\u0005\u0002\u0002\'+\u0005",
    "\n\u0006\u0002()\u0007\u0006\u0002\u0002)*\u0007\u0007\u0002\u0002*",
    ",\u0005\n\u0006\u0002+(\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002",
    "\u0002,-\u0003\u0002\u0002\u0002-.\u0007\b\u0002\u0002./\u0005\u000e",
    "\b\u0002/0\u0007\t\u0002\u00020\u0007\u0003\u0002\u0002\u000212\u0007",
    "\u0012\u0002\u00022\t\u0003\u0002\u0002\u000238\u0005\f\u0007\u0002",
    "45\t\u0002\u0002\u000257\u0005\f\u0007\u000264\u0003\u0002\u0002\u0002",
    "7:\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u000289\u0003\u0002\u0002",
    "\u00029\u000b\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002;B\u0005",
    "\u0014\u000b\u0002<B\u0005\b\u0005\u0002=>\u0007\u000e\u0002\u0002>",
    "?\u0005\n\u0006\u0002?@\u0007\u000f\u0002\u0002@B\u0003\u0002\u0002",
    "\u0002A;\u0003\u0002\u0002\u0002A<\u0003\u0002\u0002\u0002A=\u0003\u0002",
    "\u0002\u0002B\r\u0003\u0002\u0002\u0002CE\u0005\u0004\u0003\u0002DC",
    "\u0003\u0002\u0002\u0002EH\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002",
    "\u0002FG\u0003\u0002\u0002\u0002G\u000f\u0003\u0002\u0002\u0002HF\u0003",
    "\u0002\u0002\u0002IJ\u0005\b\u0005\u0002JK\u0007\u0011\u0002\u0002K",
    "L\u0005\n\u0006\u0002L\u0011\u0003\u0002\u0002\u0002MN\u0007\u0010\u0002",
    "\u0002NO\u0005\n\u0006\u0002O\u0013\u0003\u0002\u0002\u0002PQ\u0007",
    "\u0013\u0002\u0002Q\u0015\u0003\u0002\u0002\u0002\b\u0019 +8AF"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'variar'", "'desde'", "'hasta'", "'con'", 
                            "'paso'", "'hacer'", "'fin_variar'", "'+'", 
                            "'-'", "'*'", "'/'", "'('", "')'", "'escribir'", 
                            "'<-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "ASIGNAR", 
                             "ID", "INT", "WS" ];
    static ruleNames = [ "programa", "instruccion", "variar", "variable", 
                         "expresion", "termino", "bloque", "asignacion", 
                         "salida", "numero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_programa);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.instruccion();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalculatorParser.T__0) | (1 << CalculatorParser.T__13) | (1 << CalculatorParser.ID))) !== 0));
	        this.state = 25;
	        this.match(CalculatorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_instruccion);
	    try {
	        this.state = 30;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CalculatorParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 27;
	            this.variar();
	            break;
	        case CalculatorParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 28;
	            this.asignacion();
	            break;
	        case CalculatorParser.T__13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 29;
	            this.salida();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variar() {
	    let localctx = new VariarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_variar);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(CalculatorParser.T__0);
	        this.state = 33;
	        this.variable();
	        this.state = 34;
	        this.match(CalculatorParser.T__1);
	        this.state = 35;
	        this.expresion();
	        this.state = 36;
	        this.match(CalculatorParser.T__2);
	        this.state = 37;
	        this.expresion();
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===CalculatorParser.T__3) {
	            this.state = 38;
	            this.match(CalculatorParser.T__3);
	            this.state = 39;
	            this.match(CalculatorParser.T__4);
	            this.state = 40;
	            this.expresion();
	        }

	        this.state = 43;
	        this.match(CalculatorParser.T__5);
	        this.state = 44;
	        this.bloque();
	        this.state = 45;
	        this.match(CalculatorParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(CalculatorParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_expresion);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.termino();
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalculatorParser.T__7) | (1 << CalculatorParser.T__8) | (1 << CalculatorParser.T__9) | (1 << CalculatorParser.T__10))) !== 0)) {
	            this.state = 50;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalculatorParser.T__7) | (1 << CalculatorParser.T__8) | (1 << CalculatorParser.T__9) | (1 << CalculatorParser.T__10))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 51;
	            this.termino();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalculatorParser.RULE_termino);
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CalculatorParser.INT:
	            localctx = new TerminoNumContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.numero();
	            break;
	        case CalculatorParser.ID:
	            localctx = new TerminoVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.variable();
	            break;
	        case CalculatorParser.T__11:
	            localctx = new TerminoParensContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 59;
	            this.match(CalculatorParser.T__11);
	            this.state = 60;
	            this.expresion();
	            this.state = 61;
	            this.match(CalculatorParser.T__12);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalculatorParser.RULE_bloque);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalculatorParser.T__0) | (1 << CalculatorParser.T__13) | (1 << CalculatorParser.ID))) !== 0)) {
	            this.state = 65;
	            this.instruccion();
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CalculatorParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.variable();
	        this.state = 72;
	        this.match(CalculatorParser.ASIGNAR);
	        this.state = 73;
	        this.expresion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CalculatorParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(CalculatorParser.T__13);
	        this.state = 76;
	        this.expresion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CalculatorParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(CalculatorParser.INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.T__2 = 3;
CalculatorParser.T__3 = 4;
CalculatorParser.T__4 = 5;
CalculatorParser.T__5 = 6;
CalculatorParser.T__6 = 7;
CalculatorParser.T__7 = 8;
CalculatorParser.T__8 = 9;
CalculatorParser.T__9 = 10;
CalculatorParser.T__10 = 11;
CalculatorParser.T__11 = 12;
CalculatorParser.T__12 = 13;
CalculatorParser.T__13 = 14;
CalculatorParser.ASIGNAR = 15;
CalculatorParser.ID = 16;
CalculatorParser.INT = 17;
CalculatorParser.WS = 18;

CalculatorParser.RULE_programa = 0;
CalculatorParser.RULE_instruccion = 1;
CalculatorParser.RULE_variar = 2;
CalculatorParser.RULE_variable = 3;
CalculatorParser.RULE_expresion = 4;
CalculatorParser.RULE_termino = 5;
CalculatorParser.RULE_bloque = 6;
CalculatorParser.RULE_asignacion = 7;
CalculatorParser.RULE_salida = 8;
CalculatorParser.RULE_numero = 9;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(CalculatorParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_instruccion;
    }

	variar() {
	    return this.getTypedRuleContext(VariarContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_variar;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterVariar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitVariar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitVariar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_variable;
    }

	ID() {
	    return this.getToken(CalculatorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_expresion;
        this.op = null; // Token
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_termino;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TerminoNumContext extends TerminoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterTerminoNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitTerminoNum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTerminoNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.TerminoNumContext = TerminoNumContext;

class TerminoVarContext extends TerminoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterTerminoVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitTerminoVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTerminoVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.TerminoVarContext = TerminoVarContext;

class TerminoParensContext extends TerminoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterTerminoParens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitTerminoParens(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTerminoParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.TerminoParensContext = TerminoParensContext;

class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_bloque;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_asignacion;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	ASIGNAR() {
	    return this.getToken(CalculatorParser.ASIGNAR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_salida;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_numero;
    }

	INT() {
	    return this.getToken(CalculatorParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.ProgramaContext = ProgramaContext; 
CalculatorParser.InstruccionContext = InstruccionContext; 
CalculatorParser.VariarContext = VariarContext; 
CalculatorParser.VariableContext = VariableContext; 
CalculatorParser.ExpresionContext = ExpresionContext; 
CalculatorParser.TerminoContext = TerminoContext; 
CalculatorParser.BloqueContext = BloqueContext; 
CalculatorParser.AsignacionContext = AsignacionContext; 
CalculatorParser.SalidaContext = SalidaContext; 
CalculatorParser.NumeroContext = NumeroContext; 
