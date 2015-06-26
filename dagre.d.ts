// Type definitions for dagre 0.7.0
// Project: https://github.com/cpettitt/dagre
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module Dagre{
    interface DagreFactory {
        graphlib: GraphLib;
        layout(graph: Graph);
        layout(): Graph;
    }

    interface Graph {
        new (): Graph;
        rankDir(dir: string);
        edges(): string[];
        edge(id: string): any;
        nodes(): string[];
        node(id: string): any;
        _edgeCount;
        _nodeCount;
        _isDirected;
        _isMultiGraph;
        _isCompound;
        _nodes;
        _out: any;
        _in: any;
        setDefaultEdgeLabel(callback: () => void): Graph;
        setEdge(sourceId: string, targetId: string, weight?: Object): Graph;
        setGraph(options: { [key: string]: any }): Graph;
        setNode(id: string, node: { [key: string]: any }): Graph;
        removeEdge(v, w);
        removeNode(v);
    }

    interface GraphLib {
        Graph: Graph;
    }
}

declare var dagre: Dagre.DagreFactory;

