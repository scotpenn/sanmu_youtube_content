window.articleData = {
  title: "送别毛孩子：一份充满尊严与爱的温哥华指南",
  header: {
    title: "送别毛孩子",
    subtitle: "一份充满尊严与爱的温哥华指南"
  },
  sections: [
    {
      content: `
        <div class="text-center">
            <p class="text-2xl md:text-3xl font-semibold" style="color: #4682B4;">它不只是宠物，它是家人。</p>
            <p class="mt-4 text-gray-600">失去它的悲伤，是真实且深刻的。这份指南将陪伴你，走过这段艰难但充满爱的旅程，做出不留遗憾的选择。</p>
        </div>`
    },
    {
      title: "第一阶段：当治疗走向尽头",
      content: `
        <h3 class="text-xl font-bold text-center mb-6">“宠物安宁疗护”：最后的温柔</h3>
        <p class="text-center text-gray-600 mb-8">当治愈不再是目标，我们可以选择将重点转向“生活质量”。在温哥华，像 <strong style="color: #20B2AA;">Lifting Stars</strong> 这样的移动兽医服务，可以将关怀带进我们最熟悉的家。</p>
        <div class="grid md:grid-cols-3 gap-6 text-center">
            <div class="p-4"><span class="text-4xl">💊</span><h4 class="font-bold mt-2">专业疼痛管理</h4><p class="text-sm text-gray-600 mt-1">通过药物有效缓解不适，让它舒适地度过每一天。</p></div>
            <div class="p-4"><span class="text-4xl">🏠</span><h4 class="font-bold mt-2">调整居家环境</h4><p class="text-sm text-gray-600 mt-1">提供专业的建议，让家成为它最安全、放松的港湾。</p></div>
            <div class="p-4"><span class="text-4xl">✅</span><h4 class="font-bold mt-2">生活质量评估</h4><p class="text-sm text-gray-600 mt-1">由兽医帮助我们客观判断它的感受，做出最适合它的决定。</p></div>
        </div>`
    },
    // ... 其他 section 的内容 ...
    {
      title: "第三阶段：告别之后",
      content: `
        <h3 class="text-xl font-bold text-center mb-6">身后事的处理：两种选择</h3>
        <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <p class="text-gray-600 mb-4">在温哥华，专业的善后机构如 <strong style="color: #20B2AA;">Until We Meet Again</strong> 提供了清晰的选择。这不仅是处理方式的不同，更是纪念方式的差异。</p>
                <ul class="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong class="font-semibold">独立火化 (Private):</strong> 费用较高，但可以领回它的骨灰，作为永恒的纪念。</li>
                    <li><strong class="font-semibold">集体火化 (Communal):</strong> 费用较低，骨灰会被有尊严地撒在专门的草地，让它回归自然。</li>
                </ul>
            </div>
            <div class="chart-container">
                <canvas id="cremationChart"></canvas>
            </div>
        </div>`
    }
  ],
  chart: {
    canvasId: 'cremationChart',
    chartConfig: {
      type: 'bar',
      data: {
        labels: ['独立火化 (骨灰返还)', '集体火化 (回归自然)'],
        datasets: [{
          label: '选项',
          data: [10, 6],
          backgroundColor: ['#20B2AA', '#B0C4DE'],
          borderColor: ['#4682B4', '#778899'],
          borderWidth: 1,
          barPercentage: 0.6,
          categoryPercentage: 0.7
        }]
      },
      options: { /* ... Chart.js options ... */ }
    }
  },
  footer: {
    title: "最后的升华",
    text: "我们为它所做的这一切，不仅仅是对它的爱，更是我们自己的一场修行。它教会我们什么是责任，什么是“有尊严的放手”，以及如何在不可避免的失去面前，选择善良和温柔。"
  }
};
