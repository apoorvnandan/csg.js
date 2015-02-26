/**
 * Created by Natallia on 09/12/2014.
 */
var treeGenerator = function () {
    var width = 950,
        height = 500;
    var margin = {top: 40, right: 120, bottom: 20, left: 120};

    var svg = d3.select('#app-body .tree')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var mainVP = new VisualParameters("horizontal", 20, 20, width, height, 0);

    var tree = new Tree(treeRoot);
    tree.draw(svg, mainVP);

}()
