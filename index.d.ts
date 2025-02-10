declare class ExpectHelper {
    expectEqual(actualValue: any, expectedValue: any, customErrorMsg?: string): void;
    expectNotEqual(actualValue: any, expectedValue: any, customErrorMsg?: string): void;
    expectDeepEqual(actualValue: any, expectedValue: any, customErrorMsg?: string): void;
    expectNotDeepEqual(actualValue: any, expectedValue: any, customErrorMsg?: string): void;
    expectContain(actualValue: any, expectedValueToContain: any, customErrorMsg?: string): void;
    expectNotContain(actualValue: any, expectedValueToNotContain: any, customErrorMsg?: string): void;
    expectStartsWith(actualValue: string, expectedValueToStartWith: string, customErrorMsg?: string): void;
    expectNotStartsWith(actualValue: string, expectedValueToNotStartWith: string, customErrorMsg?: string): void;
    expectEndsWith(actualValue: string, expectedValueToEndWith: string, customErrorMsg?: string): void;
    expectNotEndsWith(actualValue: string, expectedValueToNotEndWith: string, customErrorMsg?: string): void;
    expectJsonSchema(targetData: any, jsonSchema: any, customErrorMsg?: string): void;
    expectJsonSchemaUsingAJV(targetData: any, jsonSchema: any, customErrorMsg?: string, ajvOptions?: any): void;
    expectHasProperty(targetData: any, propertyName: string, customErrorMsg?: string): void;
    expectToBeA(targetData: any, type: string, customErrorMsg?: string): void;
    expectToBeAn(targetData: any, type: string, customErrorMsg?: string): void;
    expectMatchRegex(targetData: string, regex: RegExp, customErrorMsg?: string): void;
    expectLengthOf(targetData: any, length: number, customErrorMsg?: string): void;
    expectEmpty(targetData: any, customErrorMsg?: string): void;
    expectTrue(targetData: any, customErrorMsg?: string): void;
    expectFalse(targetData: any, customErrorMsg?: string): void;
    expectAbove(targetData: number, aboveThan: number, customErrorMsg?: string): void;
    expectBelow(targetData: number, belowThan: number, customErrorMsg?: string): void;
    expectDeepMembers(actualValue: any[], expectedValue: any[], customErrorMsg?: string): void;
    expectDeepIncludeMembers(superset: any[], set: any[], customErrorMsg?: string): void;
    expectDeepEqualExcluding(actualValue: any, expectedValue: any, fieldsToExclude: string | string[], customErrorMsg?: string): void;
    expectMatchesPattern(actualValue: object, expectedPattern: object, customErrorMsg?: string): void;
  }  