// Generated from ./src/parser/gen/EventCondition.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ConditionContext } from "./EventConditionParser.js";
import { ClanConditionContext } from "./EventConditionParser.js";
import { VoteConditionContext } from "./EventConditionParser.js";
import { GameServerContext } from "./EventConditionParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `EventConditionParser`.
 */
export default class EventConditionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `EventConditionParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;
	/**
	 * Enter a parse tree produced by `EventConditionParser.clanCondition`.
	 * @param ctx the parse tree
	 */
	enterClanCondition?: (ctx: ClanConditionContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.clanCondition`.
	 * @param ctx the parse tree
	 */
	exitClanCondition?: (ctx: ClanConditionContext) => void;
	/**
	 * Enter a parse tree produced by `EventConditionParser.voteCondition`.
	 * @param ctx the parse tree
	 */
	enterVoteCondition?: (ctx: VoteConditionContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.voteCondition`.
	 * @param ctx the parse tree
	 */
	exitVoteCondition?: (ctx: VoteConditionContext) => void;
	/**
	 * Enter a parse tree produced by `EventConditionParser.gameServer`.
	 * @param ctx the parse tree
	 */
	enterGameServer?: (ctx: GameServerContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.gameServer`.
	 * @param ctx the parse tree
	 */
	exitGameServer?: (ctx: GameServerContext) => void;
}

