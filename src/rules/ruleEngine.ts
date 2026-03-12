// ruleEngine.ts
export type Rule<T> = {
    name: string;
    evaluate: (context: T) => boolean;
};

export type RuleGroup<T> = {
    name: string;
    rules: Rule<T>[];
    logic: "AND" | "OR";
};

export function evaluateRules<T>(rules: Rule<T>[], context: T): Record<string, boolean> {
    return Object.fromEntries(
        rules.map(rule => [rule.name, rule.evaluate(context)])
    );
}

export function runRule<T>(rules: Rule<T>[], name: string, context: T): boolean {
    const rule = rules.find(r => r.name === name);
    if (!rule) throw new Error(`Rule "${name}" not found`);
    return rule.evaluate(context);
}

export function runRuleGroup<T>(group: RuleGroup<T>, context: T): boolean {
    const results = group.rules.map(rule => rule.evaluate(context));
    return group.logic === "AND"
        ? results.every(Boolean)
        : results.some(Boolean);
}
