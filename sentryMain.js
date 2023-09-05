const faker = {
    "insertId": "64f0df3e0006eed69d52758e",
    "jsonPayload": {
      "data": {
        "triggered_rule": ".NET Test Issues Teams Integration",
        "event": {
          "datetime": "2023-08-31T18:42:53.483496Z",
          "event_id": "ef3c6e0b38214aa59524307d018c987d",
          "title": "Ionic.Zip.ZipException: Cannot read that as a ZipFile",
          "issue_id": "4443393720",
          "tags": [
            [
              "app-type",
              "ScheduledProcessesQuartz"
            ],
            [
              "builder-id",
              "71912"
            ],
            [
              "builder-name",
              "Blakes Bossin Buildings"
            ],
            [
              "environment",
              "Test"
            ],
            [
              "exception-class",
              "Ionic.Zip.BadReadException"
            ],
            [
              "level",
              "error"
            ],
            [
              "os",
              "Windows 10"
            ],
            [
              "os.name",
              "Windows"
            ],
            [
              "runtime",
              ".NET Framework 4.8.4645.0"
            ],
            [
              "runtime.name",
              ".NET Framework"
            ],
            [
              "release",
              "314760-test"
            ],
            [
              "user",
              "id:0"
            ],
            [
              "server-ip",
              "::1,10.230.0.53"
            ],
            [
              "server_name",
              "test-qtz-ff13"
            ],
            [
              "transaction-id",
              "e0caf9e4-7acd-4862-86cb-458afd6d43f2"
            ]
          ],
          "user": {
            "data": {
              "other": {
                "Jobsite ID": "0",
                "Portal Login Type": "-- All Users, Owners, Subs/Vendors, Leads --",
                "Global User Id": "0",
                "Builder": "Blakes Bossin Buildings (71912)",
                "BTAdminLink": "https://test.buildertrend.net/btadmin/adminBuilders.aspx?builderid=71912"
              }
            },
            "id": "0"
          },
          "nodestore_insert": 1693507379.280654,
          "level": "error",
          "grouping_config": {
            "enhancements": "eJybzDRxc15qeXFJZU6qlZGBkbGugaGuoeEEAHJMCAM",
            "id": "newstyle:2023-01-11"
          },
          "release": "314760-test",
          "type": "error",
          "timestamp": 1693507373.483496,
          "logger": "",
          "location": null,
          "_ref": 5790930,
          "issue_url": "https://sentry.io/api/0/issues/4443393720/",
          "dist": null,
          "hashes": [
            "d0e0de70f82734095b3815ac25fc7396"
          ],
          "url": "https://sentry.io/api/0/projects/buildertrend/btnet-dotnet/events/ef3c6e0b38214aa59524307d018c987d/",
          "culprit": "Resources\\Compression\\CompressionUtility.cs in bool CompressionUtility.ProcessFilesInZip(MemoryStream zipStream, ProcessFileDelegate processFileCallback)",
          "project": 5790930,
          "web_url": "https://sentry.io/organizations/buildertrend/issues/4443393720/events/ef3c6e0b38214aa59524307d018c987d/",
          "message": "",
          "received": 1693507373.508838,
          "_metrics": {
            "bytes.ingested.event": 12593,
            "bytes.stored.event": 25896
          },
          "modules": {
            "K4os.Hash.xxHash": "1.0.6.0",
            "Google.Apis": "1.55.0.0",
            "Nest": "7.0.0.0",
            "System.Runtime.Extensions": "4.0.0.0",
            "Microsoft.Owin.StaticFiles": "2.1.0.0",
            "NPOI.OOXML": "2.5.1.0",
            "Google.Apis.Core": "1.55.0.0",
            "System.Runtime.Serialization": "4.0.0.0",
            "Global.Utilities": "1.0.0.0",
            "Google.Cloud.Iam.V1": "2.3.0.0",
            "Google.Cloud.Logging.V2": "3.4.0.0",
            "Microsoft.Owin": "4.2.0.0",
            "Microsoft.AspNetCore.Http.Features": "3.1.0.0",
            "System.Drawing": "4.0.0.0",
            "Elastic.Apm": "1.16.1.0",
            "Microsoft.VisualStudio.TestPlatform.TestFramework": "14.0.0.0",
            "System.Data.Linq": "4.0.0.0",
            "System.Net.Primitives": "4.0.0.0",
            "System.Configuration": "4.0.0.0",
            "System.Diagnostics.DiagnosticSource": "5.0.0.0",
            "System.Text.Encoding": "4.0.0.0",
            "BTSerializeJSAttribute": "1.2.0.0",
            "System.Core": "4.0.0.0",
            "netstandard": "2.0.0.0",
            "System.Text.Json": "5.0.0.2",
            "System.Xml.Linq": "4.0.0.0",
            "MailKit": "3.6.0.0",
            "CrowdStrike.Sensor.ScriptControl": "6.58.17212.0",
            "Magick.NET.Core": "13.1.0.0",
            "SMDiagnostics": "4.0.0.0",
            "System.Numerics.Vectors": "4.1.4.0",
            "System.ComponentModel.DataAnnotations": "4.0.0.0",
            "System.Drawing.Common": "7.0.0.0",
            "System.IO": "4.0.0.0",
            "Google.Api.Gax.Grpc.GrpcCore": "3.5.0.0",
            "System.Web.Http": "5.2.7.0",
            "Global.DependencyResolver": "1.0.0.0",
            "StackExchange.Redis": "2.0.0.0",
            "Quartzmin": "1.0.0.0",
            "Microsoft.Diagnostics.Tracing.TraceEvent": "2.0.2.0",
            "System.Threading.Tasks.Extensions": "4.2.0.1",
            "DAL.Core": "1.0.0.0",
            "Google.Apis.Auth": "1.55.0.0",
            "System.Collections": "4.0.0.0",
            "Topshelf": "4.1.0.172",
            "Elastic.Apm.AspNetFullFramework": "1.16.1.0",
            "Quartzmin.SelfHost": "1.0.0.0",
            "Buildertrend.Utilities.Ocr": "1.0.0.0",
            "System.ValueTuple": "4.0.3.0",
            "MimeKit": "3.6.0.0",
            "Pathoschild.Http.Client": "3.2.0.0",
            "DotNetZip": "1.16.0.0",
            "BT_Encryptor": "1.0.0.0",
            "System.Memory": "4.0.1.2",
            "System.EnterpriseServices": "4.0.0.0",
            "System.Threading.Tasks.Dataflow": "4.6.3.0",
            "System.IO.Pipelines": "7.0.0.0",
            "Microsoft.Extensions.Logging": "3.1.0.0",
            "Google.Api.Gax": "3.6.0.0",
            "Microsoft.Owin.Host.HttpListener": "4.2.0.0",
            "Owin": "1.0.0.0",
            "DAL": "1.0.0.0",
            "Handlers.Accounting": "1.0.0.0",
            "BusinessLogic.Managers": "1.0.0.0",
            "Google.Cloud.Kms.V1": "2.7.0.0",
            "Handlers.Merchants": "1.0.0.0",
            "RedLockNet.SERedis": "2.2.0.0",
            "nClam": "4.0.1.0",
            "Handlers.IntegrationHandlers": "1.0.8643.29979",
            "Global.DependencyInjection": "1.0.0.0",
            "System.Net.Http.Formatting": "5.2.7.0",
            "Ical.Net": "1.0.0.0",
            "System.Linq.Async": "5.1.0.0",
            "mscorlib": "4.0.0.0",
            "System.Runtime.InteropServices.RuntimeInformation": "4.0.0.0",
            "Google.Cloud.DevTools.Common": "2.1.0.0",
            "StrongGrid": "0.50.2.0",
            "Google.Api.Gax.Grpc": "3.5.0.0",
            "ICSharpCode.SharpZipLib": "1.4.2.13",
            "Datadog.Trace.ClrProfiler.Managed.Loader": "2.14.0.0",
            "Elasticsearch.Net": "7.0.0.0",
            "Microsoft.Extensions.Options": "3.1.7.0",
            "System.Reflection.Metadata": "5.0.0.0",
            "Handlebars": "1.9.5.0",
            "Microsoft.Extensions.DependencyInjection.Abstractions": "3.1.22.0",
            "System.Numerics": "4.0.0.0",
            "Hangfire.Pro.Redis": "2.8.20.0",
            "Braintree": "5.15.0.0",
            "System.Configuration.ConfigurationManager": "4.0.2.0",
            "System.Threading": "4.0.0.0",
            "System.Transactions": "4.0.0.0",
            "BusinessLogic.Engines": "1.0.0.0",
            "FirebaseAdmin": "1.9.1.0",
            "Google.Cloud.Logging.Type": "3.3.0.0",
            "log4net": "2.0.15.0",
            "Microsoft.AspNetCore.SignalR.Client.Core": "3.0.0.0",
            "System.Runtime.CompilerServices.Unsafe": "6.0.0.0",
            "Handlers.DataAccessHandlers": "1.0.0.0",
            "Grpc.Core": "2.0.0.0",
            "Google.Cloud.Storage.V1": "3.6.0.0",
            "System.Threading.Channels": "5.0.0.0",
            "Grpc.Core.Api": "2.0.0.0",
            "MongoDB.Bson": "2.19.1.0",
            "K4os.Compression.LZ4.Streams": "1.2.16.0",
            "System.Net.Http": "4.0.0.0",
            "JsonSubTypes": "1.5.2.0",
            "Microsoft.Bcl.AsyncInterfaces": "6.0.0.0",
            "Polly": "7.0.0.0",
            "BuilderTrend": "0.0.0.0",
            "System.Buffers": "4.0.3.0",
            "System.Data.SqlClient": "4.6.1.5",
            "Microsoft.Extensions.DependencyInjection": "3.1.22.0",
            "Clients.ScheduledProcesses": "1.0.0.0",
            "AngleSharp": "0.9.9.0",
            "Quartz.Plugins.RecentHistory": "1.0.0.0",
            "Buildertrend.Utilities.Core": "1.0.5.0",
            "Datadog.Trace": "2.33.0.0",
            "Microsoft.Owin.Hosting": "4.2.0.0",
            "System": "4.0.0.0",
            "System.ServiceProcess": "4.0.0.0",
            "System.Text.Encoding.Extensions": "4.0.0.0",
            "Hangfire.Core": "1.7.33.0",
            "System.Web.Http.Owin": "5.2.7.0",
            "Microsoft.Diagnostics.FastSerialization": "1.0.0.0",
            "Global.Core": "1.0.0.0",
            "Google.Apis.Storage.v1": "1.55.0.2526",
            "Newtonsoft.Json": "13.0.0.0",
            "Google.Api.Gax.Rest": "3.6.0.0",
            "Imageflow.Net": "0.0.0.0",
            "System.Data.DataSetExtensions": "4.0.0.0",
            "Microsoft.Extensions.Primitives": "3.1.7.0",
            "AutoMapper": "10.0.0.0",
            "Pipelines.Sockets.Unofficial": "1.0.0.0",
            "System.ComponentModel.Annotations": "4.2.1.0",
            "System.Threading.Tasks": "4.0.0.0",
            "Quartz": "3.0.7.0",
            "Microsoft.Extensions.Logging.Log4Net.AspNetCore": "2.2.12.0",
            "Microsoft.Extensions.Http": "2.2.0.0",
            "System.Text.Encodings.Web": "6.0.0.0",
            "Grpc.Auth": "2.0.0.0",
            "Intuit.Ipp.OAuth2PlatformClient": "14.6.3.4",
            "K4os.Compression.LZ4": "1.2.16.0",
            "HtmlSanitizer": "4.0.0.0",
            "LightInject": "6.5.2.0",
            "Google.Cloud.PubSub.V1": "2.7.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "3.1.0.0",
            "NPOI.OpenXml4Net": "2.5.1.0",
            "MoreLinq": "3.3.2.0",
            "Google.Protobuf": "3.19.3.0",
            "MongoDB.Driver": "2.19.1.0",
            "Quartz.Serialization.Json": "3.0.7.0",
            "System.Xml": "4.0.0.0",
            "System.Web": "4.0.0.0",
            "NPOI": "2.5.1.0",
            "Microsoft.CSharp": "4.0.0.0",
            "Microsoft.Owin.FileSystems": "2.1.0.0",
            "System.Collections.Immutable": "7.0.0.0",
            "RestSharp.Serializers.NewtonsoftJson": "106.11.7.0",
            "System.Dynamic": "4.0.0.0",
            "System.Linq": "4.0.0.0",
            "System.Data": "4.0.0.0",
            "Sentry": "3.25.0.0",
            "RestSharp": "106.12.0.0",
            "Microsoft.VisualBasic": "10.0.0.0",
            "System.Runtime": "4.0.0.0",
            "Google.Cloud.Logging.Log4Net": "3.3.0.0",
            "ChargeBee": "3.8.0.0",
            "Intuit.Ipp.Data": "14.6.3.4",
            "RedLockNet.Abstractions": "2.2.0.0",
            "Google.Api.CommonProtos": "2.5.0.0",
            "VimeoDotNet": "2.0.0.23",
            "Serilog": "2.0.0.0",
            "NPOI.OpenXmlFormats": "2.5.1.0"
          },
          "key_id": "1682840",
          "sdk": {
            "version": "3.25.0",
            "name": "sentry.dotnet",
            "packages": [
              {
                "name": "nuget:sentry.dotnet",
                "version": "3.25.0"
              }
            ],
            "integrations": null
          },
          "exception": {
            "values": [
              {
                "raw_stacktrace": {
                  "frames": [
                    {
                      "colno": null,
                      "snapshot": null,
                      "in_app": true,
                      "trust": null,
                      "filename": null,
                      "function": "void ZipFile.ReadIntoInstance(ZipFile zf)",
                      "package": "DotNetZip, Version=1.16.0.0, Culture=neutral, PublicKeyToken=6583c7c814667745",
                      "addr_mode": null,
                      "vars": null,
                      "symbol_addr": null,
                      "source_link": null,
                      "raw_function": null,
                      "symbol": null,
                      "image_addr": null,
                      "pre_context": null,
                      "abs_path": null,
                      "data": null,
                      "platform": null,
                      "errors": null,
                      "instruction_addr": "0x144",
                      "context_line": null,
                      "post_context": null,
                      "module": null,
                      "lock": null,
                      "lineno": null
                    },
                    {
                      "source_link": null,
                      "image_addr": null,
                      "platform": null,
                      "addr_mode": null,
                      "raw_function": null,
                      "lineno": null,
                      "abs_path": null,
                      "function": "void ZipFile.ReadIntoInstance_Orig(ZipFile zf)",
                      "data": null,
                      "vars": null,
                      "colno": null,
                      "errors": null,
                      "post_context": null,
                      "trust": null,
                      "symbol": null,
                      "in_app": true,
                      "symbol_addr": null,
                      "lock": null,
                      "filename": null,
                      "snapshot": null,
                      "module": null,
                      "package": "DotNetZip, Version=1.16.0.0, Culture=neutral, PublicKeyToken=6583c7c814667745",
                      "context_line": null,
                      "instruction_addr": "0xb6",
                      "pre_context": null
                    },
                    {
                      "symbol_addr": null,
                      "instruction_addr": "0x44",
                      "errors": null,
                      "lock": null,
                      "abs_path": null,
                      "raw_function": null,
                      "colno": null,
                      "data": null,
                      "post_context": null,
                      "filename": null,
                      "module": null,
                      "in_app": true,
                      "platform": null,
                      "source_link": null,
                      "addr_mode": null,
                      "vars": null,
                      "package": "DotNetZip, Version=1.16.0.0, Culture=neutral, PublicKeyToken=6583c7c814667745",
                      "context_line": null,
                      "lineno": null,
                      "image_addr": null,
                      "snapshot": null,
                      "symbol": null,
                      "trust": null,
                      "pre_context": null,
                      "function": "ZipEntry ZipEntry.ReadEntry(ZipContainer zc, bool first)"
                    },
                    {
                      "raw_function": null,
                      "symbol_addr": null,
                      "image_addr": null,
                      "function": "bool ZipEntry.ReadHeader(ZipEntry ze, Encoding defaultEncoding)",
                      "abs_path": null,
                      "instruction_addr": "0x72",
                      "data": null,
                      "filename": null,
                      "package": "DotNetZip, Version=1.16.0.0, Culture=neutral, PublicKeyToken=6583c7c814667745",
                      "colno": null,
                      "platform": null,
                      "pre_context": null,
                      "source_link": null,
                      "vars": null,
                      "in_app": true,
                      "context_line": null,
                      "addr_mode": null,
                      "symbol": null,
                      "trust": null,
                      "errors": null,
                      "lock": null,
                      "module": null,
                      "lineno": null,
                      "post_context": null,
                      "snapshot": null
                    }
                  ]
                },
                "value": "  Bad signature (0x44734555) at position  0x00000000",
                "thread_id": 55,
                "type": "Ionic.Zip.BadReadException",
                "module": "DotNetZip, Version=1.16.0.0, Culture=neutral, PublicKeyToken=6583c7c814667745",
                "stacktrace": {
                  "frames": [
                    {
                      "in_app": true,
                      "function": "void ZipFile.ReadIntoInstance(ZipFile zf)",
                      "symbol": null,
                      "platform": null,
                      "post_context": null,
                      "vars": null,
                      "addr_mode": null,
                      "filename": null,
                      "raw_function": null,
                      "package": "DotNetZip, Version=1.16.0.0, Culture=neutral, PublicKeyToken=6583c7c814667745",
                      "lock": null,
                      "pre_context": null,
                      "trust": null,
                      "module": null,
                      "snapshot": null,
                      "colno": null,
                      "instruction_addr": "0x144",
                      "source_link": null,
                      "image_addr": null,
                      "errors": null,
                      "context_line": null,
                      "lineno": null,
                      "data": {
                        "symbolicator_status": "unknown_image"
                      },
                      "abs_path": null,
                      "symbol_addr": null
                    },
                    {
                      "lock": null,
                      "trust": null,
                      "raw_function": null,
                      "package": "DotNetZip, Version=1.16.0.0, Culture=neutral, PublicKeyToken=6583c7c814667745",
                      "abs_path": null,
                      "data": {
                        "symbolicator_status": "unknown_image"
                      },
                      "filename": null,
                      "post_context": null,
                      "errors": null,
                      "in_app": true,
                      "context_line": null,
                      "vars": null,
                      "snapshot": null,
                      "platform": null,
                      "addr_mode": null,
                      "module": null,
                      "source_link": null,
                      "symbol_addr": null,
                      "function": "void ZipFile.ReadIntoInstance_Orig(ZipFile zf)",
                      "instruction_addr": "0xb6",
                      "symbol": null,
                      "image_addr": null,
                      "lineno": null,
                      "colno": null,
                      "pre_context": null
                    },
                    {
                      "lock": null,
                      "data": {
                        "symbolicator_status": "unknown_image"
                      },
                      "errors": null,
                      "source_link": null,
                      "package": "DotNetZip, Version=1.16.0.0, Culture=neutral, PublicKeyToken=6583c7c814667745",
                      "colno": null,
                      "in_app": true,
                      "snapshot": null,
                      "filename": null,
                      "module": null,
                      "vars": null,
                      "trust": null,
                      "abs_path": null,
                      "lineno": null,
                      "raw_function": null,
                      "symbol": null,
                      "function": "ZipEntry ZipEntry.ReadEntry(ZipContainer zc, bool first)",
                      "platform": null,
                      "pre_context": null,
                      "symbol_addr": null,
                      "image_addr": null,
                      "post_context": null,
                      "instruction_addr": "0x44",
                      "context_line": null,
                      "addr_mode": null
                    },
                    {
                      "symbol_addr": null,
                      "snapshot": null,
                      "addr_mode": null,
                      "abs_path": null,
                      "in_app": true,
                      "trust": null,
                      "module": null,
                      "platform": null,
                      "data": {
                        "symbolicator_status": "unknown_image"
                      },
                      "lock": null,
                      "pre_context": null,
                      "filename": null,
                      "image_addr": null,
                      "raw_function": null,
                      "context_line": null,
                      "errors": null,
                      "lineno": null,
                      "package": "DotNetZip, Version=1.16.0.0, Culture=neutral, PublicKeyToken=6583c7c814667745",
                      "post_context": null,
                      "function": "bool ZipEntry.ReadHeader(ZipEntry ze, Encoding defaultEncoding)",
                      "instruction_addr": "0x72",
                      "vars": null,
                      "colno": null,
                      "source_link": null,
                      "symbol": null
                    }
                  ]
                }
              },
              {
                "raw_stacktrace": {
                  "frames": [
                    {
                      "platform": null,
                      "data": null,
                      "context_line": null,
                      "instruction_addr": "0xd8",
                      "colno": 33,
                      "errors": null,
                      "abs_path": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\InboundEmailManager.cs",
                      "vars": null,
                      "function": "MailFolderTypes? InboundEmailManager.ProcessSortedMessage(IMimeMessage msg, MailFolderTypes type, out int numberProcessed)",
                      "pre_context": null,
                      "lock": null,
                      "module": null,
                      "lineno": 242,
                      "raw_function": null,
                      "trust": null,
                      "snapshot": null,
                      "image_addr": null,
                      "in_app": true,
                      "post_context": null,
                      "symbol_addr": null,
                      "addr_mode": null,
                      "package": "BusinessLogic.Managers, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                      "symbol": null,
                      "filename": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\InboundEmailManager.cs",
                      "source_link": null
                    },
                    {
                      "source_link": null,
                      "pre_context": null,
                      "colno": 17,
                      "addr_mode": null,
                      "abs_path": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\InboundEmailManager.cs",
                      "errors": null,
                      "image_addr": null,
                      "vars": null,
                      "filename": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\InboundEmailManager.cs",
                      "instruction_addr": "0x18b",
                      "context_line": null,
                      "module": null,
                      "trust": null,
                      "data": null,
                      "package": "BusinessLogic.Managers, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                      "lock": null,
                      "symbol_addr": null,
                      "lineno": 424,
                      "in_app": true,
                      "platform": null,
                      "function": "Tuple<ProcessMessageStatus, BT_MimeMessage> InboundEmailManager.ProcessSingleEmailMessage(IMimeMessage msg, EmailIntoBTEmailAddress btAddress)",
                      "snapshot": null,
                      "post_context": null,
                      "symbol": null,
                      "raw_function": null
                    },
                    {
                      "abs_path": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\BT_MimeMessages\\BT_MimeMessage_Docs.cs",
                      "errors": null,
                      "lineno": 65,
                      "platform": null,
                      "lock": null,
                      "function": "bool BT_MimeMessage_Docs.Process()",
                      "addr_mode": null,
                      "raw_function": null,
                      "instruction_addr": "0x13",
                      "filename": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\BT_MimeMessages\\BT_MimeMessage_Docs.cs",
                      "context_line": null,
                      "symbol": null,
                      "image_addr": null,
                      "snapshot": null,
                      "pre_context": null,
                      "vars": null,
                      "post_context": null,
                      "package": "BusinessLogic.Managers, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                      "module": null,
                      "symbol_addr": null,
                      "source_link": null,
                      "data": null,
                      "in_app": true,
                      "colno": 13,
                      "trust": null
                    },
                    {
                      "platform": null,
                      "image_addr": null,
                      "post_context": null,
                      "symbol": null,
                      "raw_function": null,
                      "filename": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\BT_MimeMessages\\BT_MimeMessage_Docs.cs",
                      "function": "bool BT_MimeMessage_Docs.SaveDocs()",
                      "context_line": null,
                      "colno": 17,
                      "instruction_addr": "0x1d",
                      "lock": null,
                      "lineno": 137,
                      "vars": null,
                      "module": null,
                      "snapshot": null,
                      "package": "BusinessLogic.Managers, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                      "trust": null,
                      "data": null,
                      "source_link": null,
                      "symbol_addr": null,
                      "errors": null,
                      "pre_context": null,
                      "in_app": true,
                      "addr_mode": null,
                      "abs_path": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\BT_MimeMessages\\BT_MimeMessage_Docs.cs"
                    },
                    {
                      "snapshot": null,
                      "symbol": null,
                      "trust": null,
                      "image_addr": null,
                      "pre_context": null,
                      "data": null,
                      "source_link": null,
                      "colno": 21,
                      "context_line": null,
                      "symbol_addr": null,
                      "addr_mode": null,
                      "lock": null,
                      "filename": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\BT_MimeMessages\\BT_MimeMessage_Docs.cs",
                      "lineno": 175,
                      "raw_function": null,
                      "errors": null,
                      "platform": null,
                      "post_context": null,
                      "vars": null,
                      "in_app": true,
                      "package": "BusinessLogic.Managers, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                      "module": null,
                      "abs_path": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\BT_MimeMessages\\BT_MimeMessage_Docs.cs",
                      "function": "bool BT_MimeMessage_Docs.SaveThisAttachment(IMimePart attach1)",
                      "instruction_addr": "0x5d"
                    },
                    {
                      "data": null,
                      "errors": null,
                      "symbol_addr": null,
                      "platform": null,
                      "trust": null,
                      "raw_function": null,
                      "module": null,
                      "function": "bool CompressionUtility.ProcessFilesInZip(MemoryStream zipStream, ProcessFileDelegate processFileCallback)",
                      "lineno": 29,
                      "addr_mode": null,
                      "pre_context": null,
                      "vars": null,
                      "in_app": true,
                      "instruction_addr": "0x1d",
                      "image_addr": null,
                      "snapshot": null,
                      "abs_path": "Resources\\Compression\\CompressionUtility.cs",
                      "context_line": null,
                      "colno": 20,
                      "post_context": null,
                      "lock": null,
                      "source_link": null,
                      "package": "Global.Utilities, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                      "filename": "Resources\\Compression\\CompressionUtility.cs",
                      "symbol": null
                    },
                    {
                      "symbol": null,
                      "post_context": null,
                      "vars": null,
                      "symbol_addr": null,
                      "source_link": null,
                      "data": null,
                      "instruction_addr": "0x78",
                      "raw_function": null,
                      "pre_context": null,
                      "package": "DotNetZip, Version=1.16.0.0, Culture=neutral, PublicKeyToken=6583c7c814667745",
                      "snapshot": null,
                      "in_app": true,
                      "colno": null,
                      "function": "ZipFile ZipFile.Read(Stream zipStream, TextWriter statusMessageWriter, Encoding encoding, EventHandler<ReadProgressEventArgs> readProgress)",
                      "context_line": null,
                      "abs_path": null,
                      "trust": null,
                      "image_addr": null,
                      "module": null,
                      "platform": null,
                      "errors": null,
                      "addr_mode": null,
                      "filename": null,
                      "lineno": null,
                      "lock": null
                    },
                    {
                      "module": null,
                      "colno": null,
                      "context_line": null,
                      "package": "DotNetZip, Version=1.16.0.0, Culture=neutral, PublicKeyToken=6583c7c814667745",
                      "snapshot": null,
                      "platform": null,
                      "filename": null,
                      "data": null,
                      "in_app": true,
                      "image_addr": null,
                      "post_context": null,
                      "raw_function": null,
                      "instruction_addr": "0x17c",
                      "lineno": null,
                      "abs_path": null,
                      "errors": null,
                      "source_link": null,
                      "function": "void ZipFile.ReadIntoInstance(ZipFile zf)",
                      "trust": null,
                      "symbol_addr": null,
                      "pre_context": null,
                      "addr_mode": null,
                      "lock": null,
                      "vars": null,
                      "symbol": null
                    }
                  ]
                },
                "thread_id": 55,
                "type": "Ionic.Zip.ZipException",
                "value": "Cannot read that as a ZipFile",
                "stacktrace": {
                  "frames": [
                    {
                      "raw_function": null,
                      "pre_context": null,
                      "colno": 33,
                      "symbol_addr": null,
                      "errors": null,
                      "data": {
                        "symbolicator_status": "unknown_image"
                      },
                      "platform": null,
                      "function": "MailFolderTypes? InboundEmailManager.ProcessSortedMessage(IMimeMessage msg, MailFolderTypes type, out int numberProcessed)",
                      "context_line": null,
                      "module": null,
                      "image_addr": null,
                      "package": "BusinessLogic.Managers, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                      "source_link": null,
                      "trust": null,
                      "symbol": null,
                      "in_app": true,
                      "addr_mode": null,
                      "vars": null,
                      "instruction_addr": "0xd8",
                      "post_context": null,
                      "lock": null,
                      "abs_path": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\InboundEmailManager.cs",
                      "lineno": 242,
                      "snapshot": null,
                      "filename": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\InboundEmailManager.cs"
                    },
                    {
                      "instruction_addr": "0x18b",
                      "post_context": null,
                      "package": "BusinessLogic.Managers, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                      "pre_context": null,
                      "abs_path": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\InboundEmailManager.cs",
                      "function": "Tuple<ProcessMessageStatus, BT_MimeMessage> InboundEmailManager.ProcessSingleEmailMessage(IMimeMessage msg, EmailIntoBTEmailAddress btAddress)",
                      "symbol": null,
                      "lineno": 424,
                      "data": {
                        "symbolicator_status": "unknown_image"
                      },
                      "trust": null,
                      "vars": null,
                      "context_line": null,
                      "source_link": null,
                      "platform": null,
                      "module": null,
                      "in_app": true,
                      "raw_function": null,
                      "filename": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\InboundEmailManager.cs",
                      "colno": 17,
                      "addr_mode": null,
                      "errors": null,
                      "lock": null,
                      "symbol_addr": null,
                      "snapshot": null,
                      "image_addr": null
                    },
                    {
                      "symbol_addr": null,
                      "source_link": null,
                      "image_addr": null,
                      "raw_function": null,
                      "errors": null,
                      "context_line": null,
                      "package": "BusinessLogic.Managers, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                      "pre_context": null,
                      "colno": 13,
                      "in_app": true,
                      "module": null,
                      "data": {
                        "symbolicator_status": "unknown_image"
                      },
                      "vars": null,
                      "instruction_addr": "0x13",
                      "lock": null,
                      "post_context": null,
                      "abs_path": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\BT_MimeMessages\\BT_MimeMessage_Docs.cs",
                      "function": "bool BT_MimeMessage_Docs.Process()",
                      "snapshot": null,
                      "addr_mode": null,
                      "filename": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\BT_MimeMessages\\BT_MimeMessage_Docs.cs",
                      "trust": null,
                      "lineno": 65,
                      "symbol": null,
                      "platform": null
                    },
                    {
                      "module": null,
                      "trust": null,
                      "symbol": null,
                      "context_line": null,
                      "image_addr": null,
                      "abs_path": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\BT_MimeMessages\\BT_MimeMessage_Docs.cs",
                      "addr_mode": null,
                      "errors": null,
                      "function": "bool BT_MimeMessage_Docs.SaveDocs()",
                      "platform": null,
                      "symbol_addr": null,
                      "snapshot": null,
                      "data": {
                        "symbolicator_status": "unknown_image"
                      },
                      "vars": null,
                      "filename": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\BT_MimeMessages\\BT_MimeMessage_Docs.cs",
                      "lock": null,
                      "source_link": null,
                      "colno": 17,
                      "raw_function": null,
                      "post_context": null,
                      "instruction_addr": "0x1d",
                      "pre_context": null,
                      "lineno": 137,
                      "in_app": true,
                      "package": "BusinessLogic.Managers, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
                    },
                    {
                      "lock": null,
                      "function": "bool BT_MimeMessage_Docs.SaveThisAttachment(IMimePart attach1)",
                      "source_link": null,
                      "vars": null,
                      "snapshot": null,
                      "post_context": null,
                      "lineno": 175,
                      "platform": null,
                      "pre_context": null,
                      "filename": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\BT_MimeMessages\\BT_MimeMessage_Docs.cs",
                      "symbol": null,
                      "module": null,
                      "package": "BusinessLogic.Managers, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                      "abs_path": "C:\\adoBuild1\\_work\\2\\s\\BusinessLogic.Managers\\BT_MimeMessages\\BT_MimeMessage_Docs.cs",
                      "raw_function": null,
                      "addr_mode": null,
                      "context_line": null,
                      "image_addr": null,
                      "instruction_addr": "0x5d",
                      "errors": null,
                      "data": {
                        "symbolicator_status": "unknown_image"
                      },
                      "symbol_addr": null,
                      "colno": 21,
                      "in_app": true,
                      "trust": null
                    },
                    {
                      "vars": null,
                      "platform": null,
                      "lock": null,
                      "context_line": null,
                      "symbol_addr": null,
                      "filename": "Resources\\Compression\\CompressionUtility.cs",
                      "addr_mode": null,
                      "image_addr": null,
                      "snapshot": null,
                      "post_context": null,
                      "colno": 20,
                      "symbol": null,
                      "abs_path": "Resources\\Compression\\CompressionUtility.cs",
                      "instruction_addr": "0x1d",
                      "lineno": 29,
                      "raw_function": null,
                      "function": "bool CompressionUtility.ProcessFilesInZip(MemoryStream zipStream, ProcessFileDelegate processFileCallback)",
                      "trust": null,
                      "module": null,
                      "errors": null,
                      "source_link": null,
                      "data": {
                        "symbolicator_status": "unknown_image"
                      },
                      "package": "Global.Utilities, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                      "in_app": true,
                      "pre_context": null
                    },
                    {
                      "data": {
                        "symbolicator_status": "unknown_image"
                      },
                      "snapshot": null,
                      "filename": null,
                      "colno": null,
                      "symbol_addr": null,
                      "module": null,
                      "platform": null,
                      "lineno": null,
                      "lock": null,
                      "image_addr": null,
                      "instruction_addr": "0x78",
                      "package": "DotNetZip, Version=1.16.0.0, Culture=neutral, PublicKeyToken=6583c7c814667745",
                      "pre_context": null,
                      "function": "ZipFile ZipFile.Read(Stream zipStream, TextWriter statusMessageWriter, Encoding encoding, EventHandler<ReadProgressEventArgs> readProgress)",
                      "context_line": null,
                      "abs_path": null,
                      "addr_mode": null,
                      "vars": null,
                      "post_context": null,
                      "trust": null,
                      "in_app": true,
                      "raw_function": null,
                      "source_link": null,
                      "symbol": null,
                      "errors": null
                    },
                    {
                      "errors": null,
                      "abs_path": null,
                      "symbol_addr": null,
                      "platform": null,
                      "instruction_addr": "0x17c",
                      "lock": null,
                      "raw_function": null,
                      "vars": null,
                      "addr_mode": null,
                      "filename": null,
                      "trust": null,
                      "image_addr": null,
                      "data": {
                        "symbolicator_status": "unknown_image"
                      },
                      "colno": null,
                      "package": "DotNetZip, Version=1.16.0.0, Culture=neutral, PublicKeyToken=6583c7c814667745",
                      "context_line": null,
                      "function": "void ZipFile.ReadIntoInstance(ZipFile zf)",
                      "in_app": true,
                      "snapshot": null,
                      "symbol": null,
                      "module": null,
                      "post_context": null,
                      "source_link": null,
                      "lineno": null,
                      "pre_context": null
                    }
                  ]
                },
                "module": "DotNetZip, Version=1.16.0.0, Culture=neutral, PublicKeyToken=6583c7c814667745"
              }
            ]
          },
          "metadata": {
            "function": "void ZipFile.ReadIntoInstance(ZipFile zf)",
            "value": "Cannot read that as a ZipFile",
            "display_title_with_tree_label": false,
            "type": "Ionic.Zip.ZipException",
            "in_app_frame_mix": "in-app-only"
          },
          "version": "7",
          "contexts": {
            "device": {
              "boot_time": "2023-08-15T09:03:00.6498021+00:00",
              "timezone": "Central Standard Time",
              "type": "device",
              "timezone_display_name": "(UTC-06:00) Central Time (US & Canada)"
            },
            "runtime": {
              "version": "4.8.4645.0",
              "name": ".NET Framework",
              "type": "runtime",
              "raw_description": ".NET Framework 4.8.4645.0"
            },
            "Mobile App": {
              "type": "Mobile App",
              "NativeAppVersion": null,
              "MobileAppType": ""
            },
            "Custom Message": {
              "type": "Custom Message",
              "CustomMessage": "Inbound Emails had an exception and the email was moved to a different folder.<br/><br/>Subject:zip file<br/><br/>Sender:blake.headley@buildertrend.com (blake.headley)<br/><br/>TO email addresses:kg5eu4k2jbhy7vzcusrx1r5finamwpc8xqoej2a7mdi_ix_54b7d050751@docsdev.buildertrend.net; <br/><br/>CC email addresses:No email addresses found.<br/><br/>BCC email addresses:No email addresses found.<br/><br/>X-Rcpt-To:No X-RCPT-TO header found.<br/><br/>To Address was: kg5eu4k2jbhy7vzcusrx1r5finamwpc8xqoej2a7mdi_ix_54b7d050751@docsdev.buildertrend.net"
            },
            "app": {
              "app_start_time": "2023-08-31T17:53:36.621278+00:00",
              "type": "app"
            },
            "os": {
              "raw_description": "Microsoft Windows 10.0.17763 ",
              "type": "os",
              "version": "10",
              "name": "Windows",
              "build": "17763"
            },
            "ThreadPool Info": {
              "min_completion_port_threads": 16,
              "type": "ThreadPool Info",
              "max_worker_threads": 32767,
              "available_completion_port_threads": 1000,
              "min_worker_threads": 16,
              "max_completion_port_threads": 1000,
              "available_worker_threads": 32764
            },
            "Current Culture": {
              "name": "en-US",
              "display_name": "English (United States)",
              "type": "Current Culture",
              "calendar": "GregorianCalendar"
            },
            "Tracing Values": {
              "DataDogTraceId": "4686310305289085694",
              "TraceId": "1083639642178a40",
              "DataDogSpanId": "5066981623866703739",
              "type": "Tracing Values"
            },
            ".NET Framework": {
              "type": ".NET Framework",
              ".NET Framework Full": "\"v4.8\"",
              ".NET Framework ": "\"v2.0.50727\", \"v3.0\", \"v3.5\"",
              ".NET Framework Client": "\"v4.8\", \"v4.0.0.0\""
            },
            "Form Post Values": {
              "FormPostValues": "",
              "type": "Form Post Values"
            },
            "Request Items": {
              "ConnectionStackCount": 0,
              "IsWebAPI": false,
              "type": "Request Items"
            },
            "Additional Exception Info": {
              "Source": "DotNetZip",
              "InnerExceptionNotes": null,
              "type": "Additional Exception Info"
            }
          },
          "fingerprint": [
            "{{ default }}"
          ],
          "platform": "csharp",
          "environment": "Test",
          "_ref_version": 2,
          "ingest_path": [
            {
              "version": "23.8.0",
              "public_key": "XE7QiyuNlja9PZ7I9qJlwQotzecWrUIN91BAO7Q5R38"
            }
          ]
        }
      },
      "action": "triggered",
      "installation": {
        "uuid": "dbb4da9c-e292-48a8-9c4c-07f3f0bcce03"
      },
      "actor": {
        "id": "sentry",
        "name": "Sentry",
        "type": "application"
      }
    },
    "resource": {
      "type": "cloud_run_revision",
      "labels": {
        "location": "us-central1",
        "revision_name": "sentry-test3-00027-mag",
        "project_id": "clear-network-397314",
        "service_name": "sentry-test3",
        "configuration_name": "sentry-test3"
      }
    },
    "timestamp": "2023-08-31T18:43:10.454358Z",
    "labels": {
      "goog-managed-by": "cloudfunctions",
      "instanceId": "00e6760073b45f58f43e38d95aaf406f40fb5bd6809a8159b7b5fe5ad2cfd94204c2e2455390628b5f6bc1e8615b724e50cab57951e5f67eca229aeb1a7e52b1ee"
    },
    "logName": "projects/clear-network-397314/logs/run.googleapis.com%2Fstdout",
    "receiveTimestamp": "2023-08-31T18:43:10.461596523Z"
  }

 helloHttp(faker);


  function helloHttp (req) {

    //********REPLACE ALL 'jsonPayload' WITH 'body' AS THIS GOES LIVE************

    //URL for Teams room
    const roomId = 'https://btrnd.webhook.office.com/webhookb2/5eaf0af9-49dc-49a3-a4c5-8e3bdca02071@b8aed721-407b-4eb1-97b6-0b936cbd4481/IncomingWebhook/a659268146ea4ccb80aa099ea8ba7fa7/492a68fb-45f9-400a-9469-01cd87137204'
    //values for the notification build
    let summary, sections, themeColors;
    let issue_url = req.jsonPayload.data.event.web_url;
    const tagList = ['user','BT-Employee','builder-name'];

    //helping generate the Teams message
    let facts = [];
    

    //adds the logged in user to the notification if available  
    if(req.jsonPayload.data.event.user.username){
        facts = [
            ...facts,
            {
                name: 'Username',
                value: `${req.jsonPayload.data.event.user.username}`
            },
        ]
    }    

    //adds the request url to the notification if available  
    if(req.jsonPayload.data.event.request){
        if(req.jsonPayload.data.event.request.url){
        facts = [
            ...facts,
            {
                name: 'Request URL',
                value: `${req.jsonPayload.data.event.request.url.toString().replace('https://test.buildertrend.net/','') }`
            },
        ]
    }
    }

    //adds custom message from Sentry to the notification if available  
    if(req.jsonPayload.data.event.contexts['Custom Message'].CustomMessage && req.jsonPayload.data.event.contexts['Custom Message'].CustomMessage !== ''){
        facts = [
            ...facts,
            {
                name: 'Custom Message',
                value: `${req.jsonPayload.data.event.contexts['Custom Message'].CustomMessage}`
            },
        ]
    }

    //capture how many stacktraces there are in the exception
    var exceptionTotal = Object.keys(req.jsonPayload.data.event.exception.values).length

    //target the top most stacktrace
    var stacktrace = req.jsonPayload.data.event.exception.values[exceptionTotal-1].raw_stacktrace.frames;

    //let length of stacktrace
    var stackLength = Object.keys(stacktrace).length;
    let lastFile = ''; 

    //check if the errored file stacktrace exists
    if(stacktrace[stackLength-2].filename){
       
        //grabbing the entry point file from stacktrace
        for(let x = stackLength-2; x>0; x--){
            if(stacktrace[x].filename){
                lastFile = stacktrace[x].filename.toString();
            }
        }

        const entrySlash = lastFile.lastIndexOf('\\');
        const shortEntry = lastFile.substring(entrySlash + 1)

        facts = [
            ...facts,
            {
                name: 'Entry Point',
                value: `${shortEntry}`
            },
        ]

        //adding the file where the exception occured
        //grabs the second to last line of the stacktrace which seems to always have the file
        const fileString = stacktrace[stackLength-2].filename.toString();
        const lastSlash = fileString.lastIndexOf('\\');
        const shortName = fileString.substring(lastSlash + 1);

        facts = [
            ...facts,
            {
                name: 'File that Errored',
                value: `${shortName}`,
            },
        ]    

    }



    //getting all the priority tags
    //using Taglist for the important tags we want then looping through all the 
    //sent tags to see if it's available then adding to facts
    var tags = req.jsonPayload.data.event.tags;
    for(let x = 0; x < Object.keys(tags).length; x++)
    {
        let wordFind = ''
        for(let y = 0; y<tagList.length;y++){

            wordFind = tags[x].toString().search(tagList[y]);
            if(wordFind != -1){
                facts = [
                    ...facts,
                    {
                        name: `${tagList[y]}`,
                        //gets the tag value, then removes the tag name for better presentation
                        value: `${tags[x].toString().replace(`${tagList[y]},`,'')}`
                    },
                ];
            }
            
        }   
        
    }


    //building the notification
    summary = `New Sentry Error in Test`;
    themeColors = '0078D7';
    

    sections = [
        {
            facts: facts,
        },
        {
            startGroup: true,
            activityText: `<span style='color: #0066cc'>${req.jsonPayload.data.event.metadata.type}</span> \n <span style='color: #004080'>${req.jsonPayload.data.event.metadata.value}</span>`,
            activityImage: 'https://toppng.com/uploads/preview/sentry-logo-11609375923oyrqeyuw1z.png',
            potentialAction: [
              {
                '@type': 'OpenUri',
                name: 'Open Sentry Report',
                targets: [
                  { os: 'default', uri: `${issue_url}` },
                  { os: 'iOS', uri: `${issue_url}` },
                  { os: 'android', uri: `${issue_url}` },
                  { os: 'windows', uri: `${issue_url}` },
                ],
              },
            ],
          },

    ];

    

    console.log(JSON.stringify(sections,null,2));     
  }