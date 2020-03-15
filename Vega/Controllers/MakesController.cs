using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vega.Controllers.Resources;
using Vega.DataBase;
using Vega.Models;

namespace Vega.Controllers
{
    public class MakesController : Controller
    {
        private readonly VegaDbContext _vegaDbContext;
        private readonly IMapper _mapper;

        public MakesController(VegaDbContext vegadbContext, IMapper mapper)
        {
            _vegaDbContext = vegadbContext;
            _mapper = mapper;
        }

        [HttpGet("/api/makes")]
        public async Task<IEnumerable<MakeResource>> GetMakes()
        {
            var makes = await _vegaDbContext.Makes.Include(m => m.Models).ToListAsync();

            return _mapper.Map<List<Make>, List<MakeResource>>(makes);
        }
    }
}
